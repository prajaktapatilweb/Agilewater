import {combineReducers} from 'redux';
import Settings from './Setting';
import Common from './Common';
import Dashboard from './Dashboard';
import Coach from './Coach';
import User from './Users';
import Comments from './Comments'

const reducers = combineReducers({
  settings: Settings,
  common: Common,
  dashboard: Dashboard,
  Coach: Coach,
  User: User,
  Comments:Comments,
});
export default reducers;
