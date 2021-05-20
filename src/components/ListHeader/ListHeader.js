import React from 'react';
import { connect } from 'react-redux';
import './listHeader.css';
import {userSignOut} from "../../actions/signin/actions";
import {openGenerator} from "../../actions/generator/actions";

const ListHeader = ({userSignOut, openGenerator}) => {
    return (
      <div className="list__header">
        <div className="list__search show">
          <div className="list__search-header">
            <div className="list__search-field-wrap">
              <input type="text" className="list__search-field input-search" autoComplete="off"
                     spellCheck="false"/>
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

const mapDispatchToProps = {
  userSignOut,
  openGenerator
};

export default connect(null, mapDispatchToProps)(ListHeader);

