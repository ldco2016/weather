import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  // responsible for weather part of state
  weather: WeatherReducer
});

export default rootReducer;
