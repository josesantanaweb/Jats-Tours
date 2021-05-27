import {combineReducers} from 'redux';
import flightClass from './flightClass';
import flexDates from './flexDates';
import dates from './dates';
import passengers from './passengers';
import flightType from './flightType';
import country from './country';
import comments from './comments';

export default combineReducers({
  flightClass,
  flightType,
  flexDates,
  dates,
  passengers,
  country,
  comments,
});
