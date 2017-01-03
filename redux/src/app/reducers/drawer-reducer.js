import { combineReducers } from 'redux'
import { TOGGLE_DRAWER } from '../actions/actions-types'


const initialToogleDrawerState = {
  open: 'false'
}

const drawerReducer = function(state = initialToogleDrawerState, action) {

  switch (action.type) {

    case TOGGLE_DRAWER :
      return { ...state, open: action.toogle };

  }
  return state;
}

export default drawerReducer
