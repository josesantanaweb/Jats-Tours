import {combineReducers} from 'redux';
import flightClass from './flightClass';
import flexDates from './flexDates';

export default combineReducers({
  flightClass,
  flexDates,
});
