import {
  CHANGE_THEME
} from '../actions/settings/types';
import { LocalStorageService } from '../services';

const initialState = {
  isDark: true
};

export const settings = (state, action) => {
  if (state === undefined) {
    if (localStorage.isDark) {
      return {
        ...initialState,
        isDark: LocalStorageService.getItem('isDark')
      }
    } else {
    return initialState
    }
  }

  const { type, payload } = action;
  switch (type) {
    case CHANGE_THEME:
      LocalStorageService.setItem('isDark', payload);
      return {
        ...state,
        isDark: payload
      };

    default:
      return state;
  }
};
