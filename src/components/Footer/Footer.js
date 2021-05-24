import React from 'react';
import { connect } from 'react-redux';
import {openGenerator} from "../../actions/generator/actions";
import {UploadAction} from "../UploadAction";
import './footer.css';
import {setFileName} from "../../actions/fileActions/actions";

const Footer = ({ openGenerator, setFileName, fileName }) => {

  return (
    <div className="app__footer">
      <div className="footer">
        <div className="change-lng"> </div>
        <input id="fileName" name="fileName" type="text" autoComplete="off"
               value={fileName.split('.')[0]} onChange={(event) => setFileName(`${event.target.value}.txt`)}/>
        <div className="footer__btn-wrapper">
          <div className="footer__btn footer__btn-generate" id="footer__btn-generate"
               title="Generator" onClick={() => openGenerator()}>
            <i className="fa fa-bolt"> </i>
          </div>
          <UploadAction />
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    fileName: state.file.fileName
  }

};

const mapDispatchToProps = {
  openGenerator,
  setFileName
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

