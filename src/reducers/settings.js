import {
  CHANGE_THEME,
  CHANGE_LANGUAGE
} from '../actions/settings/types';
import { LocalStorageService } from '../services';

const initialState = {
  isDark: true,
  isUA: false
};

const isDarkTrue = (isDark) => {
  if (isDark === true) {
    return true;
  } else if (isDark === false) {
    return false;
  } else {
    return initialState.isDark;
  }
};

const isUATrue = (isUA) => {
  if (isUA === true) {
    return true
  } else if (isUA === false) {
    return false;
  } else {
    return initialState.isUA;
  }
};

export const settings = (state, action) => {
  if (state === undefined) {
    if (localStorage.isDark || localStorage.isUA) {
      return {
        ...initialState,
        isDark: isDarkTrue(LocalStorageService.getItem('isDark')),
        isUA: isUATrue(LocalStorageService.getItem('isUA'))
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
