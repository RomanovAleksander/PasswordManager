import React from 'react';
import { connect } from 'react-redux';
import { removeItem, changeItem } from '../../actions/data/actions';
import './itemDetails.css';
import { copyToClipboard } from '../../utils/copyToClipboard';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.props.changeItem({ [name]: value })
  }

  copyInformation = (value) => {
    copyToClipboard(value);
    toast.dark('Copied!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }


  render() {
    const { data, removeItem, emptyBlock, activeItemIndex } = this.props;
    const item = data[activeItemIndex];

    if (data.length > 0) {
      const {
        title, user, password, website, notes,
        tags, group, created, updated, file, id
      } = item;

      return (
        <div className="details">
          <div className="details__header">
            <i className="details__header-color fa fa-bookmark-o"> </i>
            <input name="title" className="details__header-title" type="text" autoComplete="off"
                   value={title} onChange={this.handleInputChange} />
            <i className="details__header-icon fa fa-key"> </i>
          </div>
          <div className="details__body">
            <div className="details__body-fields">
              <div className="details__field details__field--editable details__field--options">
                <div className="details__field-label" onClick={() => this.copyInformation(user)}>User</div>
                <input className="details__field-value" name="user" type="text" autoComplete="off"
                       value={user}  onChange={this.handleInputChange} />
              </div>
              <div
                className="details__field details__field--editable details__field--can-gen details__field--protect details__field--options">
                <div className="details__field-label">Password</div>
                <input className="details__field-value" name="password" type="text" autoComplete="off"
                       value={password}  onChange={this.handleInputChange} />
              </div>
              <div className="details__field details__field--url details__field--editable details__field--options">
                <div className="details__field-label">Website</div>
                <input className="details__field-value" name="website" type="text" autoComplete="off"
                       value={website}  onChange={this.handleInputChange} />
              </div>
              <div className="details__field details__field--editable details__field--multiline">
                <div className="details__field-label">Notes</div>
                <input className="details__field-value" name="notes" type="text" autoComplete="off"
                       value={notes}  onChange={this.handleInputChange} />
              </div>
              <div className="details__field details__field--editable">
                <div className="details__field-label">Tags</div>
                <input className="details__field-value" name="tags" type="text" autoComplete="off"
                       value={tags}  onChange={this.handleInputChange} />
              </div>
              <div className="details__field details__field--editable">
                <div className="details__field-label">Group</div>
                <input className="details__field-value" name="group" type="text" autoComplete="off"
                       value={group}  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="details__body-aside">
              <div className="details__field">
                <div className="details__field-label">File</div>
                <div className="details__field-value">{file}</div>
              </div>
              <div className="details__field">
                <div className="details__field-label">Group</div>
                <div className="details__field-value">{group}</div>
              </div>
              <div className="details__field">
                <div className="details__field-label">Created</div>
                <div className="details__field-value">{created}</div>
              </div>
              <div className="details__field">
                <div className="details__field-label">Updated</div>
                <div className="details__field-value">{updated}</div>
              </div>
            </div>
          </div>
          <div className="details__buttons">
            <i className="details__buttons-trash fa fa-trash"
               title="Delete" onClick={() => removeItem(id)}
            > </i>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      );
    } else {
      return emptyBlock
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataList.data,
    activeItem: state.dataList.activeItem,
    activeItemIndex: state.dataList.activeItemIndex
  }
};

const mapDispatchToProps = {
  removeItem,
  changeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
