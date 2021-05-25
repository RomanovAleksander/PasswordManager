import React from 'react';
import {connect} from 'react-redux';
import {LoginForm} from '../LoginForm';
import {Generator} from "../Generator";
import {Footer} from "../Footer";
import {DataList} from "../DataList";
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { isDark } = this.props;
    document.body.className = isDark ? 'th-dark': 'th-light';
  }

  render() {
    const {isAuthorized, isOpen} = this.props;
    return (
      <>
        <div className="app__body">
          {isOpen ? <Generator /> : null}
          {isAuthorized ? <DataList /> : <LoginForm />}
        </div>
        {isAuthorized ? <Footer /> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.authorization.isAuthorized,
    isOpen: state.generator.isOpen,
    isDark: state.settings.isDark
  }
};

export default connect(mapStateToProps)(App);
