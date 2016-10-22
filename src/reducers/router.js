import Route from '../utils/Route';
import {connect} from 'react-redux';

import {
  HISTORY_NAVIGATION,
  GO_TO_PAGE_START,
  GO_TO_PAGE_FINISH,
  REPLACE_PAGE,
} from '../actions/actionTypes';

const routes = new Route()
  .addDefault({name: '404', paraams: {}})
  .add('/:name?', (path, name = 'home') => ({name, params: {}}))


const initialPage = routes.match(location.pathname);
const initialState = {
  isPageDataLoaded: true,
  prev: null,
  next: null,
  current: initialPage
};

const router = (state = initialState, {type, url}) => {
  switch (type) {
    case HISTORY_NAVIGATION :
      return {
        ...state,
        current: routes.match(url)
      };

    case GO_TO_PAGE_START :
      return {
        ...state,
        isPageDataLoaded: false,
        next : routes.match(url)
      };

    case GO_TO_PAGE_FINISH :
      history.pushState(null, '', url); //TODO: check for current router
      return {
        isPageDataLoaded: true,
        prev: {...state.current},
        current: routes.match(url),
        next: null,
      };

    case REPLACE_PAGE:
      history.replaceState(null, '', url);
      return routes.match(url);

    default:
      return state;
  }
};

export default router;

//Selectors
export const getIsPageDataLoaded = (state) => state.isPageDataLoaded;
export const getCurrentRoute = (state) => ({...state.current});
export const getNextRoute = (state) => ({...state.next});
export const getPreviousRoute = (state) => ({...state.prev});





//Application specific stuff;
let registeredComponents = new Map();
export const connectRouter = (mapStateToProps, mapDispatchToProps) => (component) => (dataFetcher) => {
  const wrappedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

  registeredComponents.set(wrappedComponent, {
    dataFetcher,
    computeProps : getComputePropsFunction(mapStateToProps, mapDispatchToProps)
  });

  return wrappedComponent;
};

export const callRegisterComponentDependencies = (component, state, dispatcher) => {
  const {dataFetcher, computeProps} = registeredComponents.get(component);
  return dataFetcher(computeProps(state, dispatcher));
};

import wrapActionCreators from '../utils/wrapActionCreators'

function getComputePropsFunction(
  mapState = state => ({}),
  mapDispatchToProps
) {

  let mapDispatch;
  if (typeof mapDispatchToProps === 'function') {
    mapDispatch = mapDispatchToProps
  } else if (!mapDispatchToProps) {
    mapDispatch = dispatch => ({ dispatch })
  } else {
    mapDispatch = wrapActionCreators(mapDispatchToProps)
  }

  return (state, dispatch) => ({
    ...mapState(state),
    ...mapDispatch(dispatch)
  })
}

