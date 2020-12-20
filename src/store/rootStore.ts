import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>

// export type State = RootState

const getMiddlewares = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunk);
  }

  return applyMiddleware(thunk, createLogger());
};

export const store = createStore(rootReducer, composeWithDevTools(getMiddlewares()));

export type AppDispatch = typeof store.dispatch
