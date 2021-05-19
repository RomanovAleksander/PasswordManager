import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { LoginForm } from '../LoginForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const { isAuthorized } = this.props;
    return (
      <div className="app__body">
        {isAuthorized ? <div>Hello</div> : <LoginForm />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.userData.isAuthorized,
  }
};

export default connect(mapStateToProps)(App);
