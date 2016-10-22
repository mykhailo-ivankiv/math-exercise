import {
  HISTORY_NAVIGATION,
  GO_TO_PAGE_START,
  GO_TO_PAGE_FINISH,
} from './actionTypes';

export const popState = (url) => ({type: HISTORY_NAVIGATION, url});

const goToPageStart = (url) => ({type: GO_TO_PAGE_START, url});
const goToPageFinish = (url) => ({type: GO_TO_PAGE_FINISH, url});

import {App} from '../components/App'; //TODO: fix it;

export const goToPage = (url) => (dispatch, getState) => {
  dispatch(goToPageStart(url));

  App //TODO: fix hardcode;
    .ensure(getState(), dispatch)
    .then(() => {
      dispatch(goToPageFinish(url));
    });
};