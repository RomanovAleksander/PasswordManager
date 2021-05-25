import {
  SET_FILENAME,
  OPEN_CONFIRM_BOX
} from './types';

const setFileName = (fileName) => {
  return {
    type:  SET_FILENAME,
    payload: fileName
  }
};

const openConfirmBox = () => {
  return {
    type:  OPEN_CONFIRM_BOX
  }
};

export {
  setFileName,
  openConfirmBox
};
