import {combineReducers} from 'redux';
import flightClass from './flightClass';
import flexDates from './flexDates';
import dates from './dates';
import passengers from './passengers';

export default combineReducers({
  flightClass,
  flexDates,
  dates,
  passengers,
});
