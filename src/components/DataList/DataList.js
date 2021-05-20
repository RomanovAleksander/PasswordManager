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
            <ListHeader />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.userData.isAuthorized,
    isOpen: state.generator.isOpen
  }
};

export default connect(mapStateToProps)(DataList);
