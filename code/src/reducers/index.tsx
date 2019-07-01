import { combineReducers } from 'redux';
import Home from './Home/Home';
import UserPanel from './UserPanel/UserPanel';
import FormGroupPanel from './FormGroupPanel/FormGroupPanel';

const rootReducer = combineReducers({
    Home,
    UserPanel,
    FormGroupPanel
});
export default rootReducer;