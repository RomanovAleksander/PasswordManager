import React from 'react';
import { connect } from 'react-redux';
import './dataList.css';
import {ListHeader} from "../ListHeader";
import {ItemsList} from "../ItemsList";
import {ItemDetails} from "../ItemDetails";

class DataList extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    window.onbeforeunload = function(e) {
      return window.confirm("Confirm refresh");
    }
  }

  componentWillUnmount() {
    window.onbeforeunload = null;
  }

  render() {
    const {data, activeItem} = this.props;
    return (
      <div className="app-list-wrap">
        <div className="app__list">
          <div className="list">
            <ListHeader/>
            <div className="list__items" data-baron-v-id="2">
              {data.length ? <ItemsList /> : emptyBlockList()}
            </div>
          </div>
        </div>
        <div className="app__details">
          {activeItem ? <ItemDetails /> : emptyDetailsBlock()}
        </div>
      </div>
    );
  }
}

const emptyBlockList = () => {
  return (
    <div className="empty-block muted-color">
      <div className="empty-block__icon"><i className="fa fa-key"></i></div>
      <h1 className="empty-block__title">Empty</h1>
      <p className="empty-block__text">
        add with <i className="fa fa-plus"></i> button above
      </p>
    </div>
  );
};

const emptyDetailsBlock = () => {
  return (
    <div className="empty-block muted-color">
      <h1 className="empty-block__title">Your passwords will be displayed here</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.dataList.data,
    activeItem: state.dataList.activeItem
  }
};

export default connect(mapStateToProps)(DataList);
