import React from 'react';
import {Provider, connect} from 'react-redux';

import DevTools         from './DevTools';
import Layout           from './Layout';

import configureStore from '../reducers/configureStore';
import {
  getCurrentRoute,
  getNextRoute,
} from '../reducers';

import {callRegisterComponentDependencies} from '../reducers/router';

import TaskList from './TaskList';
import PrimeFactorization from './PrimeFactorization';

export let App = ({router}) => (
  <Layout>
    <DevTools/>
    {router.name && <PrimeFactorization/>}

    {router.name && <TaskList/>}
  </Layout>
);

App.ensure = (state, dispatch) => {
  let nextRoute = getNextRoute(state);

  switch (nextRoute.name) {
    case 'tasks':
      return Promise.all([
        callRegisterComponentDependencies(TasksList, state, dispatch)
      ]);

    default:
      return Promise.resolve()
  }
};

App = connect (
  (state) => ({
    router: getCurrentRoute(state)
  })
)(App);

export default () => (
  <Provider store={configureStore()}>
    <App/>
  </Provider>
)