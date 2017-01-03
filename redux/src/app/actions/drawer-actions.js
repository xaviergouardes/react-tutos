import * as types from './actions-types';

export function toogleDrawerAction(toogle) {

  console.debug('toogleDrawerAction(' + toogle + ')');

  return {
    type: types.TOOGLE_DRAWER,
    toogle
  };
}
