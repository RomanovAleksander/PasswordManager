import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../actions/data/actions';
import './itemDetails.css';

class ItemDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      booksCount: 1
    }
  }

  onCountChange = ({target}) => {
    this.setState({
      booksCount: parseFloat(target.value)
    });
  };

  render() {
    const { data, activeItem, removeItem } = this.props;
    const itemIndex = data.findIndex((item) => item.id === activeItem);
    const item = data[itemIndex];
    const {
      title,
      user,
      password,
      website,
      notes,
      tags,
      group,
      created,
      updated,
      file
    } = item;
    const {booksCount} = this.state;



      return (
        <div className="details">
          <div className="details__header">
            <i className="details__header-color fa fa-bookmark-o"> </i>
            <h1 className="details__header-title">{title}</h1>
            <i className="details__header-icon fa fa-key"> </i>
          </div>
          <div className="details__body">
            <div className="details__body-fields">
              <div className="details__field details__field--editable details__field--options">
                <div className="details__field-label" draggable="true">User</div>
                <div className="details__field-value">{user}</div>
              </div>
              <div
                className="details__field details__field--editable details__field--can-gen details__field--protect details__field--options">
                <div className="details__field-label" draggable="true">Password</div>
                <div className="details__field-value">{password}</div>
              </div>
              <div className="details__field details__field--url details__field--editable details__field--options">
                <div className="details__field-label" draggable="true">Website</div>
                <div className="details__field-value">
                  <a href={`https://${website}`} rel="noreferrer noopener" target="_blank">{website}</a>
                </div>
              </div>
              <div className="details__field details__field--editable details__field--multiline">
                <div className="details__field-label" draggable="true">Notes</div>
                <div className="details__field-value">{notes}</div>
              </div>
              <div className="details__field details__field--editable">
                <div className="details__field-label" draggable="true">Tags</div>
                <div className="details__field-value">{tags}</div>
              </div>
              <div className="details__field details__field--editable">
                <div className="details__field-label" draggable="true">Group</div>
                <div className="details__field-value">{group}</div>
              </div>
            </div>
            <div className="details__body-aside">
              <div className="details__field">
                <div className="details__field-label" draggable="true">File</div>
                <div className="details__field-value">Demo</div>
              </div>
              <div className="details__field">
                <div className="details__field-label" draggable="true">Group</div>
                <div className="details__field-value" data-title="Demo / Internet / Sites / Social">Social</div>
              </div>
              <div className="details__field">
                <div className="details__field-label" draggable="true">Created</div>
                <div className="details__field-value">Sep 6, 2015, 7:29:30 PM</div>
              </div>
              <div className="details__field">
                <div className="details__field-label" draggable="true">Updated</div>
                <div className="details__field-value">May 22, 2021, 5:46:06 PM</div>
              </div>
            </div>
          </div>
          <div className="details__buttons">
            <i className="details__buttons-trash fa fa-trash"
               title="Delete" onClick={() => removeItem(item)}
            > </i>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataList.data,
    activeItem: state.dataList.activeItem,
  }
};

const mapDispatchToProps = {
  removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
