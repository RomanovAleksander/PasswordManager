import {
  SET_FILENAME,
  OPEN_CONFIRM_BOX
} from '../actions/fileActions/types';

const initialState = {
  fileName: '',
  isSave: false,
  isConfirmOpen: false
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
    case OPEN_CONFIRM_BOX:
      return {
        ...state,
        isConfirmOpen: !state.isConfirmOpen
      };

    default:
      return state;
  }
};
