import React from 'react';
import { connect } from 'react-redux';
import {openGenerator} from "../../actions/generator/actions";
import {UploadAction} from "../UploadAction";
import {setFileName} from "../../actions/fileActions/actions";
import {changeLanguage} from "../../actions/settings/actions";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {faBolt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './footer.css';

const Footer = ({ openGenerator, setFileName, changeLanguage, fileName }) => {

  return (
    <div className="app__footer">
      <div className="footer">
        <div className="footer__btn-wrapper">
          <div className="change-lng" onClick={() => changeLanguage()}> </div>
          <ThemeSwitcher isFooter={true}/>
        </div>
        <input id="fileName" name="fileName" type="text" autoComplete="off" title="File Name"
               value={fileName.split('.')[0]} onChange={(event) => setFileName(`${event.target.value}.txt`)}/>
        <div className="footer__btn-wrapper">
          <div className="footer__btn footer__btn-generate" id="footer__btn-generate"
               title="Generator" onClick={() => openGenerator()}>
            <FontAwesomeIcon icon={faBolt} />
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
  setFileName,
  changeLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

