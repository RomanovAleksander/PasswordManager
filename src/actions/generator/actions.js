import {
  OPEN_GENERATOR,
  CLOSE_GENERATOR
} from './types';

const openGenerator = () => {
  return {
    type: OPEN_GENERATOR
  }
};

const closeGenerator = () => {
  return {
    type: CLOSE_GENERATOR
  }
};

export {
  openGenerator,
  closeGenerator
};
