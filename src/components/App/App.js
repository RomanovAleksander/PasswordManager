import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { LoginForm } from '../LoginForm';
import {Generator} from "../Generator";
import {Footer} from "../Footer";
import {DataList} from "../DataList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const { isAuthorized, isOpen } = this.props;
    return (
      <>
        <div className="app__body">
          {isOpen ? <Generator/> : null}
          {isAuthorized ? <DataList /> : <LoginForm/>}
        </div>
        {isAuthorized ? <Footer/> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.userData.isAuthorized,
    isOpen: state.generator.isOpen
  }
};

export default connect(mapStateToProps)(App);
