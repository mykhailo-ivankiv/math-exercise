import reducers from "./index";
import { popState } from "../actions/router";
import { loadState, saveState } from "../api/localStorage";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import logger from "redux-logger";

import { tasks } from "../api/data";
const initialState = {
  ...loadState(),
  tasks
};

const enhancer = compose(
  applyMiddleware(thunk, promise, logger) // Middleware you want to use in development:
);

const configureStore = () => {
  const store = createStore(reducers, initialState, enhancer);

  window.addEventListener("popstate", () =>
    store.dispatch(popState(location.pathname))
  );

  store.subscribe(() => {
    saveState({ me: store.getState().me }); //TODO: add throttle
  });

  return store;
};

export default configureStore;
