import React from 'react';
import { connect } from 'react-redux';
import { signInRequest, signInSuccess, signInError} from '../../actions/signin/actions';
import { openGenerator, closeGenerator } from '../../actions/generator/actions';
import { dataLoaded, dataRequested } from "../../actions/data/actions";
import { setFileName } from "../../actions/fileActions/actions";
import { decryptData } from "../../services/crypt";
import { toast, ToastContainer } from 'react-toastify';
import { LocalStorageService }  from '../../services';
import Keyboard from "react-simple-keyboard";
import {FormButtons} from "../FormButtons";
import 'react-toastify/dist/ReactToastify.css';
import {Switcher} from "../Switcher";
import 'react-simple-keyboard/build/css/index.css';
import './loginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileContent = '';
    this.state = {
      button: 'new',
      masterPassword: '',
      secretPhrase: '',
      isAuthorized: false,
      fileContents: '',
      failedAttempts: 0,
      focusedInput: null,
      keyboardLayout: 'default',
      isKeyboardOpened: false,
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
      [target.name]: target.value,
    });
  };

  handleInputFocus = ({ target }) => {
    this.setState((prevState) => {
      if (prevState.focusedInput !== target.name) {
        return {
          focusedInput: target.name,
          isKeyboardOpened: false,
        };
      } else {
        return {
          focusedInput: target.name,
        };
      }
    });
  };

  handleInputBlur = () => {
    this.setState({
      focusedInput: null,
    });
  };

  onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    const layoutName = this.state.keyboardLayout;

    this.setState({
      keyboardLayout: layoutName === 'default' ? 'shift' : 'default',
    });
  };

  toggleVirtualKeyboard = (name) => {
    this.setState((prevState) => ({
      [name]: !prevState[name],
    }));
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

    return diffMs;
  }

  checkCypher = (data, masterPassword, secretPhrase) => {
    const { signInRequest, signInSuccess, signInError, dataLoaded, isUA } = this.props;
    signInRequest();

    if (data === 'Invalid Data' || !data) {
      this.setState({
        masterPassword: '',
        secretPhrase: '',
      });
      signInError('Invalid Data');
      this.setState({failedAttempts: this.state.failedAttempts + 1}, () => {
        toast.error(`${isUA ? `Невірні дані, залишилось ${5 - this.state.failedAttempts} спроби` : `Invalid Data, ${5 - this.state.failedAttempts} attempts left`}`, {
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

        toast.error(`${isUA ? `Можливість введення даних заблокована на 3 хвилини` : 'The ability to enter the data is blocked for 3 minutes'}`, {
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
      signInSuccess(masterPassword, secretPhrase);
      dataLoaded(data);
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { masterPassword, secretPhrase } = this.state;
    const { signInRequest, signInSuccess, setFileName } = this.props;

    const { button } = this.state;

    switch (button) {
      case 'open':
        const localStorageData = LocalStorageService.getItem('Data');
        let data = null;
        if (localStorageData) {
          data = decryptData(localStorageData, masterPassword, secretPhrase);
          this.checkCypher(data, masterPassword, secretPhrase);
        } else {
          this.upload();
        }
        break;
      case 'new':
        signInRequest();
        signInSuccess(masterPassword, secretPhrase);
        setFileName('NewFile.txt');
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

      const data = decryptData(fileContents, this.state.masterPassword, this.state.secretPhrase);
      this.checkCypher(data, this.state.masterPassword, this.state.secretPhrase);
    }

    fileloaded = fileloaded.bind(this);
    reader.onload = fileloaded;
    reader.readAsText(fileObj);
  }

  render() {
    const { minutes, seconds, masterPassword, secretPhrase, isKeyboardOpened, focusedInput } = this.state;
    const isFormFilled = !!masterPassword.length && !!secretPhrase.length;

    return (
      <>
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
            <div className="open__field-wrap">
              <input className="open__field" name="masterPassword" type="password" size="30" autoComplete="new-password" minLength="6"
                     maxLength="1024" placeholder={`${ this.props.isUA ? 'Введіть пароль' : 'Enter password'}`} readOnly="" tabIndex="23" required
                     onChange={this.onChange} value={this.state.masterPassword}
                     onFocus={this.handleInputFocus}
              />

              <i className={`fa fa-keyboard-o open__field-keyboard-icon ${(focusedInput === 'masterPassword' && isKeyboardOpened) && 'open__field-keyboard-icon--active'}`}
                 onClick={() => {
                   this.handleInputFocus({ target: { name: 'masterPassword' }})
                   this.toggleVirtualKeyboard('isKeyboardOpened');
                 }}
              />

              {isKeyboardOpened && focusedInput === 'masterPassword' && (
                <Keyboard
                  keyboardRef={r => (this.keyboard = r)}
                  layoutName={this.state.keyboardLayout}
                  theme={"hg-theme-default custom-theme"}
                  onChange={(input) => this.onChange({ target: { value: input, name: 'masterPassword' }})}
                  onKeyPress={this.onKeyPress}
                />
              )}
            </div>
            <div className="open__field-wrap">
              <input className="open__field" name="secretPhrase" type="password" size="30" autoComplete="new-password" minLength="6"
                     maxLength="1024" placeholder={`${ this.props.isUA ? 'Введіть секретну фразу' : 'Enter secret phrase'}`} readOnly="" tabIndex="2" required
                     onChange={this.onChange} value={this.state.secretPhrase}
                     onFocus={this.handleInputFocus}
              />

              <i className={`fa fa-keyboard-o open__field-keyboard-icon ${(focusedInput === 'secretPhrase' && isKeyboardOpened) && 'open__field-keyboard-icon--active'}`}
                 onClick={() => {
                   this.handleInputFocus({ target: { name: 'secretPhrase' }})
                   this.toggleVirtualKeyboard('isKeyboardOpened');
                 }}
              />

              {isKeyboardOpened && focusedInput === 'secretPhrase' && (
                <Keyboard
                  keyboardRef={r => (this.keyboard = r)}
                  layoutName={this.state.keyboardLayout}
                  theme={"hg-theme-default custom-theme"}
                  onChange={(input) => this.onChange({ target: { value: input, name: 'secretPhrase' }})}
                  onKeyPress={this.onKeyPress}
                />
              )}

              <button className={`open__field-enter-btn ${isFormFilled && 'open__field-enter-btn--filled'}`} type="submit">
                <i className="fa fa-level-down rotate-90 open__field-enter-btn-icon-enter"/>
                <i className="fa fa-fingerprint open__field-enter-btn-icon-touch-id"/>
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
      </>
    );
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
