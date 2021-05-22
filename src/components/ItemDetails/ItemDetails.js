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
                <div className="details__field-label">User</div>
                <div className="details__field-value">{user}</div>
              </div>
              <div
                className="details__field details__field--editable details__field--can-gen details__field--protect details__field--options">
                <div className="details__field-label">Password</div>
                <div className="details__field-value">{password}</div>
              </div>
              <div className="details__field details__field--url details__field--editable details__field--options">
                <div className="details__field-label">Website</div>
                <div className="details__field-value">
                  <a href={`https://${website}`} rel="noreferrer noopener" target="_blank">{website}</a>
                </div>
              </div>
              <div className="details__field details__field--editable details__field--multiline">
                <div className="details__field-label">Notes</div>
                <div className="details__field-value">{notes}</div>
              </div>
              <div className="details__field details__field--editable">
                <div className="details__field-label">Tags</div>
                <div className="details__field-value">{tags}</div>
              </div>
              <div className="details__field details__field--editable">
                <div className="details__field-label">Group</div>
                <div className="details__field-value">{group}</div>
              </div>
            </div>
            <div className="details__body-aside">
              <div className="details__field">
                <div className="details__field-label">File</div>
                <div className="details__field-value">{file}</div>
              </div>
              <div className="details__field">
                <div className="details__field-label">Group</div>
                <div className="details__field-value">{group}</div>
              </div>
              <div className="details__field">
                <div className="details__field-label">Created</div>
                <div className="details__field-value">{created}</div>
              </div>
              <div className="details__field">
                <div className="details__field-label">Updated</div>
                <div className="details__field-value">{updated}</div>
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
