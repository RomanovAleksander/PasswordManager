import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SEARCH_DATA,
  VIEW_DETAILS,
  CREATE_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM
} from './types';

const dataRequested = () => {
  return {
    type: FETCH_DATA_REQUEST
  }
};

const dataLoaded = (newItem) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: newItem
  }
};

const dataError = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
};

const searchData = (searchText) => ({
  type: SEARCH_DATA,
  payload: {
    searchText
  }
});

const viewDetails = (activeItem) => ({
  type: VIEW_DETAILS,
  payload: {
    activeItem
  }
});

const createItem = () => ({
  type: CREATE_ITEM
});

const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id
});

const changeItem = (values) => ({
  type: CHANGE_ITEM,
  payload: values
});

export {
  dataRequested,
  dataLoaded,
  dataError,
  searchData,
  viewDetails,
  createItem,
  removeItem,
  changeItem
};
