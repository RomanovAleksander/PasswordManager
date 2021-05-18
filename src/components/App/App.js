import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="app__body">
        <div className="open">
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
                     maxLength="1024" placeholder="Click to open a file" readOnly="" tabIndex="23" />
                <div className="open__pass-enter-btn" tabIndex="24">
                  <i className="fa fa-level-down rotate-90 open__pass-enter-btn-icon-enter"></i>
                  <i className="fa fa-fingerprint open__pass-enter-btn-icon-touch-id"></i>
                </div>
                {/*<div className="open__pass-opening-icon">*/}
                {/*  <i className="fa fa-spinner spin"></i>*/}
                {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
