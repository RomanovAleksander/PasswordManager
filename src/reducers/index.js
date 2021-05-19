import { combineReducers } from 'redux';
import { userData } from './authorization';
import { generator } from './generator';

export const reducer = combineReducers({
  userData,
  generator
});
