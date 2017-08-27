import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // inserting new record at top of array
      // this does not manipulate state
      return [action.payload.data, ...state]; // [city, city, city]
  }
  // doesnt do anything with state
  return state;
}
