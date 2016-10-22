import moment from 'moment';
import {scaleLinear}      from 'd3';

export const MINUTES_TILL_DAY = 24 * 60;
export const today = moment().startOf('day');

export const minutesAtDayToPercentageScale = scaleLinear().domain([0, MINUTES_TILL_DAY]).range([0, 100]);