import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const middleware = [];
if (process.env.NODE_ENV !== 'production') {
  // middleware.push(createLogger());
}

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
};

export default configureStore;
