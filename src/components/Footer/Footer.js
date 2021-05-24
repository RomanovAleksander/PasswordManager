import React from 'react';
import { connect } from 'react-redux';
import {openGenerator} from "../../actions/generator/actions";
import {UploadAction} from "../UploadAction";
import './footer.css';

const Footer = ({ openGenerator }) => {
    return (
      <div className="app__footer">
        <div className="footer">
          <div className="footer__btn footer__btn-generate" id="footer__btn-generate"
               data-title="Generate" onClick={() => openGenerator()} title="Generator">
            <i className="fa fa-bolt"> </i>
          </div>
          <UploadAction />
        </div>
      </div>
    )
};

const mapDispatchToProps = {
  openGenerator
};

export default connect(null, mapDispatchToProps)(Footer);

