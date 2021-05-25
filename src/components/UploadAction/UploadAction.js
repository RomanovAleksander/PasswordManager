import React from 'react';
import {connect} from 'react-redux';
import {encryptData} from "../../services/crypt";
import {dataRequested} from "../../actions/data/actions";
import {userSignOut} from "../../actions/signin/actions";
import {openConfirmBox} from "../../actions/fileActions/actions";
import {ConfirmBox} from "../ConfirmBox";
import './fileActions.css';

class UploadAction extends React.Component {
  constructor(props) {
    super(props)

    const defaultFileType = "txt";
    this.state = {
      fileType: defaultFileType,
      fileDownloadUrl: null,
      status: "",
      isSave: this.props.isSave
    }
  }

  download = (isLogOut) => {
    const {data, masterPassword, dataRequested, userSignOut} = this.props;
    const encryptedData = encryptData(data, masterPassword);

    const blob = new Blob([encryptedData]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    this.setState({fileDownloadUrl: fileDownloadUrl},
      () => {
        this.dofileDownload.click();
        URL.revokeObjectURL(fileDownloadUrl);
        this.setState({fileDownloadUrl: ""});
        if (isLogOut) {
          userSignOut();
          dataRequested();
        }
      });
  }

  logOut = (isSave) => {
    this.props.openConfirmBox();

    if (isSave) {
      this.download(true);
    } else {
      this.props.userSignOut();
    }
  }

  render() {
    const { isConfirmOpen, openConfirmBox, fileName, isUA } = this.props;
    return (
      <>
        {isConfirmOpen ? <ConfirmBox openConfirmBox={openConfirmBox}
                                     handleLogOut={() => this.logOut(false)}
                                     handleSaveAndLogOut={() => this.logOut(true)}
                                     isUA={isUA}
        /> : null}
        <div className="footer__btn footer__btn-lock" id="footer__btn-lock"
             data-title="Lock" onClick={() => this.download(false)} title="Save">
          <i className="fa fa-save" />
        </div>
        <a className="hidden"
           download={fileName}
           href={this.state.fileDownloadUrl}
           ref={e => this.dofileDownload = e}
        >download it</a>
        <div className="footer__btn" title="Log out" onClick={() => openConfirmBox()}>
          <i className="fa fa-sign-out"/>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataList.data,
    masterPassword: state.authorization.masterPassword,
    fileName: state.file.fileName,
    isSave: state.file.isSave,
    isConfirmOpen: state.file.isConfirmOpen,
    isUA: state.settings.isUA,
  }
};

const mapDispatchToProps = {
  dataRequested,
  userSignOut,
  openConfirmBox
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadAction);
