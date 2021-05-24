import React from 'react';
import {connect} from 'react-redux';
import {ItemsListItem} from "../ItemsListItem";
import {viewDetails} from "../../actions/data/actions";
import './itemsList.css';

const ItemsList = ({items, onView, activeItemId}) => {
  const isActive = (id, activeItemId) => {
    if (id === activeItemId) return 'list__item list__item--active'
    else return 'list__item'
  };

  const activated = (id, activeItemId, onView) => {
    switch (activeItemId) {
      case id:
        break;

      default:
        return onView(id)
    }
  }

  return (
    <div className="list__list list__items-container">
      {
        items.map((item) => {
          return (
            <div className={isActive(item.id, activeItemId)}
                 key={item.id}
                 onClick={() => activated(item.id, activeItemId, onView)}
            >
              <ItemsListItem
                item={item}
                activeItemId={activeItemId}
              />
            </div>
          )
        })
      }
    </div>
  )
};

class ItemsListContainer extends React.Component {
  search(items, searchText) {
    if (searchText === 0) {
      return items;
    }

    return items.filter(item => {
      return item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

  render() {
    const {
      data, searchText, viewDetails, activeItemId
    } = this.props;

    const visibleItems = this.search(data, searchText);

    if (data.length >= 0) {
      return <ItemsList
        onView={(id) => viewDetails(id)}
        activeItemId={activeItemId}
        items={visibleItems}/>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataList.data,
    searchText: state.dataList.searchText,
    activeItemId: state.dataList.activeItemId,
  }
};

const mapDispatchToProps = {
  viewDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsListContainer);
