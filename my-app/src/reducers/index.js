import shops from './shopreducer.js';

import { combineReducers } from 'redux';

const rootReducer = combineReducers(
  {
    shops
  }
);

export default rootReducer;
