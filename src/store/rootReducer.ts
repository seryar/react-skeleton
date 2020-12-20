import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { notify } from './notify/reducers';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  notify,
  router: routerReducer,
});
