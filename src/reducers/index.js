import { combineReducers } from 'redux';
import { authorization } from './authorization';
import { generator } from './generator';
import { dataList } from './dataList';

export const reducer = combineReducers({
  authorization,
  generator,
  dataList
});
