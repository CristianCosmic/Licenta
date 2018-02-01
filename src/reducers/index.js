import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';
import AuthReducer from './AuthReducer';
import WeatherReducer from './WeatherReducer';

export default combineReducers({
    auth: AuthReducer,
    newsResult: NewsReducer,
    weatherResult: WeatherReducer
});
