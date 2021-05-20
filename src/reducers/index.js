import { combineReducers } from 'redux';
import { userData } from './authorization';
import { generator } from './generator';
import { dataList } from './dataList';

export const reducer = combineReducers({
  userData,
  generator,
  dataList
});
