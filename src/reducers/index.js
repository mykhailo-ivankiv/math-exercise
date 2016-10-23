import {combineReducers} from 'redux';

import router, * as fromRouter from './router';
import search, * as fromSearch from './search';

export default combineReducers({router, search});

//Router selectors
export const getCurrentRoute = (state) => fromRouter.getCurrentRoute(state.router);
export const getNextRoute = (state) => fromRouter.getNextRoute(state.router);
export const getPreviousRoute = (state) => fromRouter.getPreviousRoute(state.router);
export const getIsPageDataLoaded = (state) => fromRouter.getIsPageDataLoaded(state.router);

// SearchSelector
export const getCurrentSearch = (state) => fromSearch.getCurrentSearch(state.search);