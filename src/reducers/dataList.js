import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SEARCH_DATA,
  VIEW_DETAILS,
  CREATE_ITEM
} from '../actions/data/types';
import { LocalStorageService } from '../services';

const initialState = {
  data: [
    {title: 'One', id: 1, user: '1234'},
    {title: 'Two', id: 2, user: '1234'},
    {title: 'Three', id: 3, user: '1234'},
  ],
  activeItem: 1,
  searchText: '',
  loading: true,
  error: null
};

export const dataList = (state, action) => {
  if (state === undefined) {
    if (localStorage.data) {
      return {
        data: LocalStorageService.getItem('Data'),
      }
    } else {
      return initialState
    }
  }

  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        data: [],
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        booksQuantity: payload.length,
        loading: false,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: payload
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchText: payload.searchText
      };
    case VIEW_DETAILS:
      return {
        ...state,
        activeItem: payload.activeItem
      };
    case CREATE_ITEM:
      const newItem = {
        title: '(no title)',
        id: state.data.length + 1,
        user: '-'
      };
      return {
        ...state,
        data: [newItem, ...state.data],
        activeItem: newItem.id
      };

    default:
      return state;
  }
};
