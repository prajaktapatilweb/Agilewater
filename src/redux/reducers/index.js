import {combineReducers} from 'redux';
import Settings from './Setting';
import Common from './Common';
import Dashboard from './Dashboard';
import Coach from './Coach';
import User from './Users';

const reducers = combineReducers({
  settings: Settings,
  common: Common,
  dashboard: Dashboard,
  Coach: Coach,
  User: User,
});
export default reducers;
