import {combineReducers} from 'redux';
import flightClass from './flightClass';
import flexDates from './flexDates';
import dates from './dates';

export default combineReducers({
  flightClass,
  flexDates,
  dates,
});
