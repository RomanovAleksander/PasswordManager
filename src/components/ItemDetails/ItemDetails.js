import React from 'react';
import { connect } from 'react-redux';
import { removeItem, changeItem } from '../../actions/data/actions';
import './itemDetails.css';
import { copyToClipboard } from '../../utils/copyToClipboard';
import {findItemIndex} from "../../utils/findIndex";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


class ItemDetails extends React.Component {
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.props.changeItem({ [name]: value })
  }

  copyInformation = (value) => {
    copyToClipboard(value);
    toast.dark(`${ this.props.isUA ? 'Скопійовано' : 'Copied'}`, {
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
    const { data, fileName, removeItem, emptyBlock, activeItemId, isUA } = this.props;
    const item = data[findItemIndex(data, activeItemId)];

    if (data.length > 0) {
      const {
        title, user, password, website, notes,
        tags, group, created, updated, id
      } = item;
      const mainItem = {user, password, website, notes, tags, group};
      const secondItem = {group, created, updated};
      const mainKeys = Object.keys(mainItem);
      const secondKeys = Object.keys(secondItem);

      const setKeyName = (key, isUA) => {
        if (key === 'user') {
          return `${isUA ? 'користувач' : key}`
        } else if (key === 'password') {
          return `${isUA ? 'пароль' : key}`
        } else if (key === 'website') {
          return `${isUA ? 'вебсайт' : key}`
        } else if (key === 'notes') {
          return `${isUA ? 'нотатки' : key}`
        } else if (key === 'tags') {
          return `${isUA ? 'теги' : key}`
        } else if (key === 'group') {
          return `${isUA ? 'група' : key}`
        } else if (key === 'created') {
          return `${isUA ? 'створено' : key}`
        } else if (key === 'updated') {
          return `${isUA ? 'оновлено' : key}`
        }
      }

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
              {
                mainKeys.map((key) => {
                  return (
                    <div className="details__field" key={key}>
                      <div className="details__field-label" onClick={() => this.copyInformation(mainItem[key])}>{setKeyName(key, isUA)}</div>
                      <input className="details__field-value" name={key} type="text" autoComplete="off"
                             value={mainItem[key]}  onChange={this.handleInputChange} />
                    </div>
                  )
                })
              }
            </div>
            <div className="details__body-aside">
              <div className="details__field">
                <div className="details__field-label cursor-def">{`${isUA ? 'Файл' : 'file'}`}</div>
                <div className="details__field-value">{fileName.split('.')[0]}</div>
              </div>
              {
                secondKeys.map((key) => {
                  return (
                    <div className="details__field" key={key}>
                      <div className="details__field-label cursor-def">{setKeyName(key, isUA)}</div>
                      <div className="details__field-value">{secondItem[key]}</div>
                    </div>
                  )
                })
              }
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
    activeItemId: state.dataList.activeItemId,
    fileName: state.file.fileName,
    isUA: state.settings.isUA
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
