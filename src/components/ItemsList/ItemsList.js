import React from 'react';
import { connect } from 'react-redux';
import {ItemsListItem} from "../ItemsListItem";
import {viewDetails} from "../../actions/data/actions";
import './itemsList.css';

const ItemsList = ({ items, onView, activeItem }) => {
  const isActive = (id, activeItem) => {
    if (id === activeItem) return 'list__item list__item--active'
    else return 'list__item'
  };

  const activated = (id, activeItem, onView) => {
    switch (activeItem) {
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
            <div className={isActive(item.id, activeItem)}
                 key={item.id}
                 onClick={() => activated(item.id, activeItem, onView)}
            >
              <ItemsListItem
                item={item}
                activeItem={activeItem}
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
      data, searchText, viewDetails, activeItem
    } = this.props;

      const visibleItems = this.search(data, searchText);
      return <ItemsList
        onView={(id) => viewDetails(id)}
        activeItem={activeItem}
        items={visibleItems} />;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataList.data,
    searchText: state.dataList.searchText,
    activeItem: state.dataList.activeItem,
  }
};

const mapDispatchToProps = {
  viewDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsListContainer);
