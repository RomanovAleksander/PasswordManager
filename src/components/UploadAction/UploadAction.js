import React from 'react';
import {connect} from 'react-redux';
import {userSignOut} from '../../actions/signin/actions';
import {encryptData} from "../../services/crypt";
import {dataRequested} from "../../actions/data/actions";
import './fileActions.css';

class UploadAction extends React.Component {
  constructor(props) {
    super(props)

    const defaultFileType = "txt";
    this.state = {
      fileType: defaultFileType,
      fileDownloadUrl: null,
      status: "",
    }
  }

  download = (event) => {
    event.preventDefault();
    const {data, masterPassword, dataRequested, userSignOut} = this.props;
    const encryptedData = encryptData(data, masterPassword);

    const blob = new Blob([encryptedData]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    this.setState({fileDownloadUrl: fileDownloadUrl},
      () => {
        this.dofileDownload.click();
        URL.revokeObjectURL(fileDownloadUrl);
        this.setState({fileDownloadUrl: ""});
        dataRequested();
        userSignOut();
      });
  }

  render() {
    return (
      <form>
        <div className="footer__btn footer__btn-lock" id="footer__btn-lock"
             data-title="Lock" onClick={this.download} title="Save and Out">
          <i className="fa fa-sign-out"> </i>
        </div>
        <a className="hidden"
           download={'New.txt'}
           href={this.state.fileDownloadUrl}
           ref={e => this.dofileDownload = e}
        >download it</a>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataList.data,
    masterPassword: state.authorization.masterPassword
  }
};

const mapDispatchToProps = {
  userSignOut,
  dataRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadAction);
