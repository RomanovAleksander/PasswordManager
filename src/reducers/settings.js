import {
  CHANGE_THEME,
  CHANGE_LANGUAGE
} from '../actions/settings/types';
import { LocalStorageService } from '../services';

const initialState = {
  isDark: true,
  isUA: true
};

export const settings = (state, action) => {
  if (state === undefined) {
    if (localStorage.isDark) {
      return {
        ...initialState,
        isDark: LocalStorageService.getItem('isDark')
      }
    }  else if (localStorage.isUA) {
      return {
        ...initialState,
        isUA: LocalStorageService.getItem('isUA')
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
    case CHANGE_LANGUAGE:
      LocalStorageService.setItem('isUA', !state.isUA);
      return {
        ...state,
        isUA: !state.isUA
      };

    default:
      return state;
  }
};
