import React from 'react';
import { connect } from 'react-redux';
import { signInRequest, signInSuccess, signInError } from '../../actions/signin/actions';
import { openGenerator, closeGenerator } from '../../actions/generator/actions';
import { LocalStorageService }  from '../../services';
import './loginForm.css';
import {FormButtons} from "../FormButtons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      button: 'new',
      masterPassword: '',
      isPassword: false
    }
  }

  onChange = ({ target }) => {
    this.setState({
      masterPassword: target.value
    });
  };

  onButtonChange = (button) => {
    this.setState({ button });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { masterPassword } = this.state;
    const { signInRequest, signInSuccess } = this.props;

    const { button } = this.state;

    switch (button) {
      case 'open':
        console.log('open file')
        break;
      case 'new':
        signInRequest();
        signInSuccess(masterPassword);
        LocalStorageService.setItem('MP', masterPassword);
        console.log(masterPassword)
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

  render() {
    return (
        <form className="open" onSubmit={this.onSubmit}>
          <FormButtons onButtonChange={this.onButtonChange} buttons={['open', 'new', 'generate']}/>
          <div className="open__pass-area">
            <div className="open__pass-field-wrap">
              <input className="open__pass-input" name="password" type="password" size="30" autoComplete="new-password"
                     maxLength="1024" placeholder="Enter password" readOnly="" tabIndex="23" required
                     onChange={this.onChange}
              />
              <button className="open__pass-enter-btn" tabIndex="24" type="submit">
                <i className="fa fa-level-down rotate-90 open__pass-enter-btn-icon-enter"></i>
                <i className="fa fa-fingerprint open__pass-enter-btn-icon-touch-id"></i>
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
    isAuthorized: state.userData.isAuthorized,
    loading: state.userData.loading,
    error: state.userData.error
  }
};

const mapDispatchToProps = {
  signInRequest,
  signInSuccess,
  signInError,
  openGenerator,
  closeGenerator
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
