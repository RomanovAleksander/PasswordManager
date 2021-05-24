import {
  SET_FILENAME
} from './types';

const setFileName = (fileName) => {
  return {
    type:  SET_FILENAME,
    payload: fileName
  }
};

export {
  setFileName
};
