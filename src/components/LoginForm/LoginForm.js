import React from 'react';
import { connect } from 'react-redux';
import { signInRequest, signInSuccess, signInError} from '../../actions/signin/actions';
import { openGenerator, closeGenerator } from '../../actions/generator/actions';
import {dataLoaded, dataRequested} from "../../actions/data/actions";
import {setFileName} from "../../actions/fileActions/actions";
import {decryptData} from "../../services/crypt";
import { toast, ToastContainer } from 'react-toastify';
import { LocalStorageService }  from '../../services';
import {FormButtons} from "../FormButtons";
import 'react-toastify/dist/ReactToastify.css';
import {Switcher} from "../Switcher";
import './loginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileContent = '';
    this.state = {
      button: 'new',
      masterPassword: '',
      isAuthorized: false,
      fileContents: '',
      failedAttempts: 0,
      remainingBlockingTime: 60000,
      UT: null,
      minutes: 3,
      seconds: 0,
    }
  }

  componentDidMount() {
    if (localStorage.UT) {
      const dateNow = new Date();
      const ut = Date.parse(LocalStorageService.getItem('UT'));
      this.setState({UT: ut});
      const diff = this.calcDateDiffInMin(dateNow, ut);
      console.log(diff);

      if (diff <= 0) {
        LocalStorageService.removeItem('UT');

        this.setState({
          failedAttempts: 0
        });
      } else {
        document.querySelector('.open-label').classList.add('label-disable');
        document.querySelector('.open__icon').classList.add('open-icon-disable');
        document.querySelector('.open__icon-text').classList.add('open-icon-text-disable');
        document.querySelector('#open').checked = false;

        this.setTimer(diff);

        this.setState({
          UT: ut,
          remainingBlockingTime: diff,
          minutes: Math.floor((diff/1000/60) << 0),
          seconds: Math.floor((diff/1000) % 60)
        });

        setTimeout(() => {
          document.querySelector('.open-label').classList.remove('label-disable');
          document.querySelector('.open__icon').classList.remove('open-icon-disable');
          document.querySelector('.open__icon-text').classList.remove('open-icon-text-disable');

          LocalStorageService.removeItem('UT');
          console.log('3 min ended');
        }, diff)
      }
    }
    window.onbeforeunload = function(e) {
      LocalStorageService.removeItem('Data');
    }
  }

  componentWillUnmount() {
    window.onbeforeunload = null;
    clearInterval(this.myInterval);
  }

  onChange = ({ target }) => {
    this.setState({
      masterPassword: target.value
    });
  };

  onButtonChange = (button) => {
    this.setState({ button });
  };

  setTimer = () => {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  calcDateDiffInMin = (oldDate, date) => {
    const diffMs = (date - oldDate);
    // return Math.round(((diffMs % 86400000) % 3600000) / 60000);
    return diffMs;
  }

  checkCypher = (data, masterPassword) => {
    const { signInRequest, signInSuccess, signInError, dataLoaded, isUA } = this.props;
    signInRequest();

    if (data === 'Invalid Password' || !data) {
      this.setState({
        masterPassword: ''
      });
      signInError('Invalid Password');
      this.setState({failedAttempts: this.state.failedAttempts + 1}, () => {
        toast.error(`${isUA ? `Невірний пароль, залишилось ${5 - this.state.failedAttempts} спроби` : `Invalid password, ${5 - this.state.failedAttempts} attempts left`}`, {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

      if (this.state.failedAttempts >= 4) {
        document.querySelector('.open-label').classList.add('label-disable');
        document.querySelector('.open__icon').classList.add('open-icon-disable');
        document.querySelector('.open__icon-text').classList.add('open-icon-text-disable');
        document.querySelector('#open').checked = false;

        const dateNow = new Date();
        const unlockTime = new Date(dateNow.getTime() + 3 * 60000);
        const diff = this.calcDateDiffInMin(dateNow, unlockTime);

        this.setState({
          UT: unlockTime,
          remainingBlockingTime: diff,
          minutes: Math.floor((diff/1000/60) << 0),
          seconds: Math.floor((diff/1000) % 60)
        });

        this.setTimer();

        setTimeout(() => {
          document.querySelector('.open-label').classList.remove('label-disable');
          document.querySelector('.open__icon').classList.remove('open-icon-disable');
          document.querySelector('.open__icon-text').classList.remove('open-icon-text-disable');
          LocalStorageService.removeItem('UT');

          this.setState({
            failedAttempts: 0
          });
        }, diff);

        LocalStorageService.setItem('UT', unlockTime.toString());

        toast.error(`${isUA ? `Можливість введення паролю заблоковано на 3 хвилини` : 'The ability to enter the password is blocked for 3 minutes'}`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      signInSuccess(masterPassword);
      dataLoaded(data);
    }
    // console.log(masterPassword);
    // console.log('open data', data);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { masterPassword } = this.state;
    const { signInRequest, signInSuccess, setFileName } = this.props;

    const { button } = this.state;

    switch (button) {
      case 'open':
        const localStorageData = LocalStorageService.getItem('Data');
        let data = null;
        if (localStorageData) {
          data = decryptData(localStorageData, masterPassword);
          this.checkCypher(data, masterPassword);
        } else {
          this.upload();
        }
        break;
      case 'new':
        signInRequest();
        signInSuccess(masterPassword);
        setFileName('NewFile.txt');

        // console.log(masterPassword);
        break;

      default:
        console.log('default')
    }
  };

  upload = () => {
    this.dofileUpload.click()
  }

  openFile = (evt) => {
    const fileObj = evt.target.files[0];
    let fileName = '';
    const reader = new FileReader();

    let fileloaded = (e) => {
      const fileContents = e.target.result;
      this.setState({fileContent: fileContents})
      fileName = fileObj.name;

      this.props.setFileName(fileName);
      LocalStorageService.setItem('Data', fileContents);

      const data = decryptData(fileContents, this.state.masterPassword);
      this.checkCypher(data, this.state.masterPassword);
    }

    fileloaded = fileloaded.bind(this);
    reader.onload = fileloaded;
    reader.readAsText(fileObj);
  }

  render() {
    const { minutes, seconds } = this.state;

    return (
        <form className="open" onSubmit={this.onSubmit}>
          <Switcher isFooter={false}/>
          <FormButtons onButtonChange={this.onButtonChange}
                       buttons={['open', 'new', 'generate']}
                       isUA={this.props.isUA} minutes={minutes}
                       seconds={seconds}
          />
          <input type="file" className="hidden"
                 multiple={false}
                 accept=".txt"
                 onChange={evt => this.openFile(evt)}
                 ref={e => this.dofileUpload = e}
          />
          <div className="open__pass-area">
            <div className="open__pass-field-wrap">
              <input className="open__pass-input" name="password" type="password" size="30" autoComplete="new-password"
                     maxLength="1024" placeholder={`${ this.props.isUA ? 'Введіть пароль' : 'Enter password'}`} readOnly="" tabIndex="23" required
                     onChange={this.onChange} value={this.state.masterPassword}
              />
              <button className="open__pass-enter-btn" tabIndex="24" type="submit">
                <i className="fa fa-level-down rotate-90 open__pass-enter-btn-icon-enter"/>
                <i className="fa fa-fingerprint open__pass-enter-btn-icon-touch-id"/>
              </button>
            </div>
          </div>
          <ToastContainer
            position='top-center'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.authorization.isAuthorized,
    loading: state.authorization.loading,
    error: state.authorization.error,
    data: state.dataList.data,
    isUA: state.settings.isUA
  }
};

const mapDispatchToProps = {
  signInRequest,
  signInSuccess,
  signInError,
  dataLoaded, dataRequested,
  openGenerator,
  closeGenerator,
  setFileName
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
