import axios from 'axios';

const API_KEY = 'a46cbfb686042874c1fbe037bea05c75';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// submit term in search_bar calls this
// ActionCreator fetchWeather and passes in city
export function fetchWeather(city) {
  // crafted url with city
  const url = `${ROOT_URL}&q=${city},us`;
  // make an Ajax request with Axios
  // and returns a Promise
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    // optional property
    // promise passed in
    // as payload
    // If the payload is a Promise,
    // ReduxPromise stops the action entirely
    // request is the payload property
    payload: request
  };
}
