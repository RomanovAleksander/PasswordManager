import React from 'react';
import { connect } from 'react-redux';
import './footer.css';
import {userSignOut} from "../../actions/signin/actions";
import {openGenerator} from "../../actions/generator/actions";
import {LocalStorageService} from "../../services";

const Footer = ({userSignOut, openGenerator, data}) => {
  const signOut = () => {
    LocalStorageService.setItem('Data', data);
    userSignOut()
  };

    return (
      <div className="app__footer">
        <div className="footer">
          <div className="footer__btn footer__btn-generate" id="footer__btn-generate"
               data-title="Generate" onClick={() => openGenerator()}>
            <i className="fa fa-bolt"> </i>
          </div>
          <div className="footer__btn footer__btn-lock" id="footer__btn-lock"
               data-title="Lock" onClick={signOut}>
            <i className="fa fa-sign-out"> </i>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    data: state.dataList.data
  }
};

const mapDispatchToProps = {
  userSignOut,
  openGenerator
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

