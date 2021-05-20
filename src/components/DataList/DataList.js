import React from 'react';
import { connect } from 'react-redux';
import './dataList.css';
import {ListHeader} from "../ListHeader";

class DataList extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const {isAuthorized, isOpen} = this.props;
    return (
      <div className="app-list-wrap">
        <div className="app__list show">
          <div className="list">
            <ListHeader/>
            <div className="list__items" data-baron-v-id="2">
              {emptyBlock()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const emptyBlock = () => {
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

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.userData.isAuthorized,
    isOpen: state.generator.isOpen
  }
};

export default connect(mapStateToProps)(DataList);
