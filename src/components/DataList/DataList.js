import React from 'react';
import {connect} from 'react-redux';
import {ListHeader} from "../ListHeader";
import {ItemsList} from "../ItemsList";
import {ItemDetails} from "../ItemDetails";
import {LocalStorageService} from "../../services";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import './dataList.css';

class DataList extends React.Component {
  componentDidMount() {
    window.onbeforeunload = function (e) {
      LocalStorageService.removeItem('Data');
      return window.confirm();
    }
  }

  componentWillUnmount() {
    window.onbeforeunload = null;
  }

  render() {
    const {data, activeItemId, isUA} = this.props;
    return (
      <div className="app-list-wrap">
        <div className="app__list">
          <div className="list">
            <ListHeader/>
            <div className="list__items" data-baron-v-id="2">
              {data.length ? <ItemsList/> : emptyBlockList(isUA)}
            </div>
          </div>
        </div>
        <div className="app__details">
          {activeItemId ? <ItemDetails emptyBlock={emptyDetailsBlock(isUA)}/> : emptyDetailsBlock(isUA)}
        </div>
      </div>
    );
  }
}

const emptyBlockList = (isUA) => {
  return (
    <div className="empty-block muted-color">
      <div className="empty-block__icon"><i className="fa fa-key" /></div>
      <h1 className="empty-block__title">{ isUA ? 'Пусто' : 'Empty' }</h1>
      <p className="empty-block__text">
        {isUA ? 'додати за допомогою ' : 'add with '}
        <FontAwesomeIcon icon={faPlus} />
        {isUA ? ' кнопки вище' : ' button above'}
      </p>
    </div>
  );
};

const emptyDetailsBlock = (isUA) => {
  return (
    <div className="empty-block muted-color">
      <h1 className="empty-block__title">{ isUA ? 'Ваші паролі будуть відображатися тут' : 'Your passwords will be displayed here'}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.dataList.data,
    activeItemId: state.dataList.activeItemId,
    isUA: state.settings.isUA
  }
};

export default connect(mapStateToProps)(DataList);
