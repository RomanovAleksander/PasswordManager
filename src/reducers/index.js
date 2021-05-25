import { combineReducers } from 'redux';
import { authorization } from './authorization';
import { generator } from './generator';
import { dataList } from './dataList';
import { file } from './file';
import {settings} from './settings';

export const reducer = combineReducers({
  authorization,
  generator,
  dataList,
  file,
  settings
});
