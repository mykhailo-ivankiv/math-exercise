import {combineReducers} from 'redux';

import router, * as fromRouter from './router';
import search, * as fromSearch from './search';
import tasks,  * as fromTasks from './tasks';

export default combineReducers({router, search, tasks});

//Router selectors
export const getCurrentRoute = (state) => fromRouter.getCurrentRoute(state.router);
export const getNextRoute = (state) => fromRouter.getNextRoute(state.router);
export const getPreviousRoute = (state) => fromRouter.getPreviousRoute(state.router);
export const getIsPageDataLoaded = (state) => fromRouter.getIsPageDataLoaded(state.router);

// Search selector
export const getCurrentSearch = (state) => fromSearch.getCurrentSearch(state.search);

// Task selectors
export const getTasks = (state) => fromTasks.getTasks(state.tasks);