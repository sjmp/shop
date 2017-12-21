import shop from './shopreducer.js';

import { combineReducers } from 'redux';

const rootReducer = combineReducers(
  {
    shop
  }
);

export default rootReducer;
