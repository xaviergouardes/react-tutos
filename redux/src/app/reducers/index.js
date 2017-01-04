import { combineReducers } from 'redux';

// Reducers
import drawerReducer from './drawer-reducer';

// Combine Reducers
var reducers = combineReducers({
    drawerState: drawerReducer,
});

//console.debug('combineReducers');
//console.debug({...drawerReducer});

export default reducers;
