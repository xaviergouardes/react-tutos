import { combineReducers } from 'redux'
//import TOGGLE_DRAWER from '../actions/actions-types'


const initialToogleDrawerState = {
  open: false
}

const drawerReducer = function(state = initialToogleDrawerState, action) {

  console.debug('drawerReducer');
  console.debug({ ...state});
  console.debug({ ...action});

  switch (action.type) {

    case 'TOGGLE_DRAWER' :

      console.debug({ ...state, open: action.toogle });
      return { ...state, open: action.toogle };

  }


  return state;
}

export default drawerReducer
