import {
  SET_FILENAME
} from '../actions/fileActions/types';

const initialState = {
  fileName: '',
  isSave: false
};

export const file = (state, action) => {
  if (state === undefined) { return initialState }
  const { type, payload } = action;
  switch (type) {
    case SET_FILENAME:
      return {
        ...state,
        fileName: payload
      };

    default:
      return state;
  }
};
