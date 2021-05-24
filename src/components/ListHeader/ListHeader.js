import React from 'react';
import { connect } from 'react-redux';
import {searchData, createItem} from "../../actions/data/actions";
import './listHeader.css';

const ListHeader = ({searchData, searchText, createItem}) => {
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
            <div className="list__search-btn-new " data-title="Add New" onClick={() => createItem()}>
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
  searchData,
  createItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);

