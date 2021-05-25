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
import './loginForm.css';
import {ThemeSwitcher} from "../ThemeSwitcher";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileContent = '';
    this.state = {
      button: 'new',
      masterPassword: '',
      isAuthorized: false,
      fileContents: ''
    }
  }

  componentDidMount() {
    window.onbeforeunload = function(e) {
      LocalStorageService.removeItem('Data');
    }
  }

  componentWillUnmount() {
    window.onbeforeunload = null;
  }

  onChange = ({ target }) => {
    this.setState({
      masterPassword: target.value
    });
  };

  onButtonChange = (button) => {
    this.setState({ button });
  };

  checkCypher = (data, masterPassword) => {
    const { signInRequest, signInSuccess, signInError, dataLoaded} = this.props;
    signInRequest();

    if (data === 'Invalid Password' ||  !data) {
      signInError(data)
    } else {
      signInSuccess(masterPassword);
      dataLoaded(data);
    }
    console.log(masterPassword);
    console.log('open data', data);
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
        setFileName('New.txt');

        console.log(masterPassword);
        break;
      case 'generate':
        console.log('err file');
        toast.error('Select the file or create', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
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
    return (
        <form className="open" onSubmit={this.onSubmit}>
          <ThemeSwitcher isFooter={false}/>
          <FormButtons onButtonChange={this.onButtonChange} buttons={['open', 'new', 'generate']} isUA={this.props.isUA}/>
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
                     onChange={this.onChange}
              />
              <button className="open__pass-enter-btn" tabIndex="24" type="submit">
                <i className="fa fa-level-down rotate-90 open__pass-enter-btn-icon-enter"/>
                <i className="fa fa-fingerprint open__pass-enter-btn-icon-touch-id"/>
              </button>
            </div>
          </div>
          <ToastContainer
            position='top-center'
            autoClose={2000}
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
