import { combineReducers } from 'redux';

// Reducers
import drawerReducer from './drawer-reducer';

// Combine Reducers
var reducers = combineReducers({
    drawerState: drawerReducer,
});

export default reducers;
