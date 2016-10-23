import {
  SEARCH_CHANGE,
  SEARCH_NEW,
} from './actionTypes';

export const searchChange = (value) => ({type: SEARCH_CHANGE, value});
export const searchNew = (value) => ({type: SEARCH_NEW, value});