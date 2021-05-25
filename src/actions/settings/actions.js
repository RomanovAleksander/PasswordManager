import {
  CHANGE_THEME
} from './types';

const changeTheme = (theme) => {
  return {
    type:  CHANGE_THEME,
    payload: theme
  }
};

export {
  changeTheme
};
