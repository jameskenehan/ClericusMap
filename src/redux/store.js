import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import defaultState from './default-state';

function configureStore() {
  const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
  return store;
}

export default configureStore;
