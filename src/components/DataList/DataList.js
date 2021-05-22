import React from 'react';
import { connect } from 'react-redux';
import './dataList.css';
import {ListHeader} from "../ListHeader";
import {ItemsList} from "../ItemsList";

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
    const {data} = this.props;
    return (
      <div className="app-list-wrap">
        <div className="app__list show">
          <div className="list">
            <ListHeader/>
            <div className="list__items" data-baron-v-id="2">
              {data.length ? <ItemsList /> : emptyBlock()}
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
    data: state.dataList.data
  }
};

export default connect(mapStateToProps)(DataList);
