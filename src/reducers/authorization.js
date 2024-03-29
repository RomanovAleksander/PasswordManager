import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT
} from '../actions/signin/types';
import { LocalStorageService } from '../services';

const initialState = {
  masterPassword: null,
  secretPhrase: null,
  isAuthorized: false,
  loading: false,
  error: null
};

export const authorization = (state, action) => {
  if (state === undefined) {
    // if (localStorage.MP) {
    //   return {
    //     ...initialState,
    //     masterPassword: LocalStorageService.getItem('MP')
    //   }
    // } else {
      return initialState
    // }
  }

  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SIGN_IN_SUCCESS:
      const { masterPassword, secretPhrase } = payload;
      return {
        ...state,
        masterPassword: masterPassword,
        secretPhrase: secretPhrase,
        isAuthorized: true,
        loading: false,
        error: null
      };
    case SIGN_IN_FAILURE:
      return {
        ...initialState,
        error: payload
      };
    case SIGN_OUT:
      LocalStorageService.removeItem('Data');
      return {
        ...initialState
      };

    default:
      return state;
  }
};
