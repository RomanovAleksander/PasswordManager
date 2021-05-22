import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SEARCH_DATA,
  VIEW_DETAILS,
  CREATE_ITEM,
  REMOVE_ITEM
} from '../actions/data/types';
import { LocalStorageService } from '../services';

const initialState = {
  data: [
    // {
    //   title: 'Facebook',
    //   id: 1621702604559.998,
    //   user: 'smith',
    //   password: '1234',
    //   website: 'facebook.com',
    //   notes: '',
    //   tags: '',
    //   group: 'Internet',
    //   created: 'Sep 6, 2015, 7:29:30 PM',
    //   updated: 'May 22, 2021, 5:46:06 PM',
    //   file: 'New'
    // },
    // {
    //   title: 'Two',
    //   id: 2,
    //   user: '1234',
    //   password: '1234',
    //   website: '1234',
    //   notes: '1234',
    //   tags: '1234',
    //   group: '1234',
    //   created: '1234',
    //   updated: '1234',
    //   file: '1234'
    // },
    // {
    //   title: 'Threee',
    //   id: 3,
    //   user: '1234',
    //   password: '1234',
    //   website: '1234',
    //   notes: '1234',
    //   tags: '1234',
    //   group: '1234',
    //   created: '1234',
    //   updated: '1234',
    //   file: '1234'
    // },
  ],
  activeItem: 1621702604559.998,
  searchText: '',
  loading: true,
  error: null
};

export const dataList = (state, action) => {
  if (state === undefined) {
    if (localStorage.Data) {
      const localStorageData = LocalStorageService.getItem('Data');
      return {
        ...initialState,
        data: localStorageData,
        activeItem: localStorageData[0].id,
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
    case REMOVE_ITEM:
      const updateData = state.data.filter((item) => item.id !== payload);
      const isArrayEmpty = () => {
        if (updateData.length === 0) {
          return null
        } else {
          return updateData[0].id
        }
      }
      // LocalStorageService.setItem('Data', updateData);
      return {
        ...state,
        data: updateData,
        activeItem: isArrayEmpty()
      };
    case CREATE_ITEM:
      const newItem = {
        title: '(no title)',
        id: Date.now() + Math.random(),
        user: '-',
        password: '',
        website: '',
        notes: '',
        tags: '',
        group: '',
        created: '',
        updated: '',
        file: ''
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
