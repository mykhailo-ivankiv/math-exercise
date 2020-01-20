import React from "react";
import { Provider, connect } from "react-redux";
import Layout from "./Layout";
import configureStore from "../reducers/configureStore";
import { getCurrentRoute, getNextRoute } from "../reducers";
import { callRegisterComponentDependencies } from "../reducers/router";

import TaskList from "./TaskList";
import D3jsDemo from "./D3jsDemo";
import Draft from "./Draft";

export let App = ({ router }) => (
  <Layout>
    {router.name === "home" && <TaskList />}
    {router.name === "d3js" && <D3jsDemo />}
    {router.name === "draft" && <Draft />}
  </Layout>
);

App.ensure = (state, dispatch) => {
  let nextRoute = getNextRoute(state);

  switch (nextRoute.name) {
    case "tasks":
      return Promise.all([
        callRegisterComponentDependencies(TasksList, state, dispatch)
      ]);

    default:
      return Promise.resolve();
  }
};

App = connect(state => ({
  router: getCurrentRoute(state)
}))(App);

export default () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
