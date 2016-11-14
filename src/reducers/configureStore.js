import reducers from './index';
import {popState} from '../actions/router';
import {loadState, saveState} from '../api/localStorage';

import {createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise';

import createLogger from 'redux-logger';
const logger = createLogger({collapsed: true});

import DevTools from '../components/DevTools';

import {tasks} from '../api/data';
const initialState = {
  ...loadState(),
  tasks
};

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk, promise, logger),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

const configureStore = () => {
  const store = createStore (reducers, initialState, enhancer);

  window.addEventListener('popstate', () => store.dispatch(popState(location.pathname)));

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  store.subscribe(() => {
    saveState({me: store.getState().me}); //TODO: add throttle
  })

  return store;
};

export default configureStore;