import {combineReducers} from 'redux';
import Settings from './Setting';
import Common from './Common';
import Dashboard from './Dashboard';
import Coach from './Coach';

const reducers = combineReducers({
  settings: Settings,
  common: Common,
  dashboard: Dashboard,
  Coach: Coach,
});
export default reducers;
