import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SEARCH_DATA,
  VIEW_DETAILS,
  CREATE_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM
} from '../actions/data/types';
// import { LocalStorageService } from '../services';
import {findItemIndex} from "../utils/findIndex";
import {getCurrentDate} from "../utils/date";
// import { decryptData } from "../services/crypt";

const initialState = {
  data: [],
  activeItemId: null,
  searchText: '',
  loading: true,
  error: null
};


export const dataList = (state, action) => {
  if (state === undefined) {
    // if (localStorage.Data) {
    //   const localStorageData = LocalStorageService.getItem('Data');
    //   return {
    //     ...initialState,
    //     data: decryptData(localStorageData, '123'),
    //     activeItemId: localStorageData[0].id,
    //   }
    // } else {
      return initialState
    // }
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
        activeItemId: payload.activeItemId,
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
        activeItemId: isArrayEmpty(),
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
        created: getCurrentDate(),
        updated: '',
        file: ''
      };
      return {
        ...state,
        data: [newItem, ...state.data],
        activeItemId: newItem.id,
      };
    case CHANGE_ITEM:
      const itemIndex = findItemIndex(state.data, state.activeItemId);
      const updatedItemsList = [
        ...state.data.slice(0, itemIndex),
        {
          ...state.data[itemIndex],
          updated: getCurrentDate(),
          ...payload
        }
        ,
        ...state.data.slice(itemIndex + 1)
      ]

      return {
        ...state,
       data: updatedItemsList
      };


    default:
      return state;
  }
};
