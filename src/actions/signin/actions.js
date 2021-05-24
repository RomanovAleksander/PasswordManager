import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT
} from './types';

const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST
  }
};

const signInSuccess = (user) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user
  }
};

const signInError = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error
  };
};

const userSignOut = () => {
  return {
    type: SIGN_OUT
  }
};

export {
  signInRequest,
  signInSuccess,
  signInError,
  userSignOut
};
