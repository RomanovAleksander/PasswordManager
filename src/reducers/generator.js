import {
  OPEN_GENERATOR,
  CLOSE_GENERATOR
} from '../actions/generator/types';

const initialState = {
 isOpen: false
};

export const generator = (state, action) => {
  if (state === undefined) { return initialState }

  const { type } = action;
  switch (type) {
    case OPEN_GENERATOR:
      return {
        ...state,
        isOpen: true
      };
    case CLOSE_GENERATOR:
      return {
        ...state,
        isOpen: false
      };

    default:
      return state;
  }
};
