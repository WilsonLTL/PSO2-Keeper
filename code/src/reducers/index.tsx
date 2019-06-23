import { combineReducers } from 'redux';
import Home from './Home/Home';
import UserPanel from './UserPanel/UserPanel';

const rootReducer = combineReducers({
    Home,
    UserPanel,
});
export default rootReducer;