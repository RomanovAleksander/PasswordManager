import React from 'react';
import { connect } from 'react-redux';
import { signInRequest, signInSuccess, signInError } from '../../actions/signin/actions';
import { LocalStorageService }  from '../../services';
import './loginForm.css';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      isPassword: false
    }
  }

  onChange = ({ target }) => {
    this.setState({
      password: target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { password } = this.state;
    const { signInRequest, signInSuccess, signInError } = this.props;

    signInRequest();
    signInSuccess(password);
    LocalStorageService.setItem('userData', password);
    console.log(password)
  };

  render() {
    return (
        <form className="open" onSubmit={this.onSubmit}>
          <div className="open__icons">
            <div className="open__icon open__icon-open" tabIndex="1" id="open__icon-open">
              <i className="fa fa-lock open__icon-i"></i>
              <div className="open__icon-text">Open</div>
            </div>
            <div className="open__icon open__icon-new" tabIndex="2" id="open__icon-new">
              <i className="fa fa-plus open__icon-i"></i>
              <div className="open__icon-text">New</div>
            </div>
            <div className="open__icon open__icon-generate" tabIndex="21" id="open__icon-generate">
              <i className="fa fa-bolt open__icon-i"></i>
              <div className="open__icon-text">Generate</div>
            </div>
          </div>
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
              {/*<div className="open__pass-opening-icon">*/}
              {/*  <i className="fa fa-spinner spin"></i>*/}
              {/*</div>*/}
            </div>
          </div>
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
  signInError
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
