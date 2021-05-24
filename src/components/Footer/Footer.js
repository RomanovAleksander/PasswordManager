import React from 'react';
import { connect } from 'react-redux';
import {openGenerator} from "../../actions/generator/actions";
import {userSignOut} from "../../actions/signin/actions";
import {UploadAction} from "../UploadAction";
import './footer.css';

const Footer = ({ openGenerator, userSignOut }) => {
    return (
      <div className="app__footer">
        <div className="footer">
          <div className="footer__btn footer__btn-generate" id="footer__btn-generate"
               title="Generator" onClick={() => openGenerator()} >
            <i className="fa fa-bolt"> </i>
          </div>
          <UploadAction />
          <div className="footer__btn footer__btn-generate" id="footer__btn-generate"
               title="Log out" onClick={() => userSignOut()} >
            <i className="fa fa-sign-out" />
          </div>
        </div>
      </div>
    )
};

const mapDispatchToProps = {
  openGenerator,
  userSignOut
};

export default connect(null, mapDispatchToProps)(Footer);

