import React from 'react';
import { connect } from 'react-redux';
import './listHeader.css';
import {searchData} from "../../actions/data/actions";

const ListHeader = ({searchData, searchText}) => {
  const onSearchChange = ({ target }) => {
    const searchText = target.value;

    searchData(searchText);
  };

    return (
      <div className="list__header">
        <div className="list__search show">
          <div className="list__search-header">
            <div className="list__search-field-wrap">
              <input type="text" className="list__search-field input-search" autoComplete="off"
                     spellCheck="false"
                     value={searchText}
                     onChange={onSearchChange}
              />
              <div className="list__search-icon-search" data-title="Toggle advanced search">
                <i className="fa fa-search"> </i>
              </div>
            </div>
            <div className="list__search-btn-new " data-title="Add New">
              <i className="fa fa-plus"> </i>
            </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    searchText: state.dataList.searchText
  }
};

const mapDispatchToProps = {
  searchData
};

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);

