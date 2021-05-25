import {
  CHANGE_THEME,
  CHANGE_LANGUAGE
} from './types';

const changeTheme = (theme) => {
  return {
    type:  CHANGE_THEME,
    payload: theme
  }
};

const changeLanguage = () => {
  return {
    type:  CHANGE_LANGUAGE
  }
};

export {
  changeTheme,
  changeLanguage
};
