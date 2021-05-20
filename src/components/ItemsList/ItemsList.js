import React from 'react';
import { connect } from 'react-redux';
import './itemsList.css';

const ItemsList = ({ books, onView }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onView={() => onView(book.id)} />
            </li>
          )
        })
      }
    </ul>
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
      books, loading, searchText,
      filterPrice, onView, isAuthorized,
      error
    } = this.props;

    if (books) {
      const visibleBooks = this.search(books, searchText);

      return <ItemsList
        onView={onView}
        books={visibleBooks} />;
    }
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsListContainer);
