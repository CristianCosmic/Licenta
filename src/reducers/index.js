import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';
import AuthReducer from './AuthReducer';
import WeatherReducer from './WeatherReducer';
import CurrencyReducer from './CurrencyReducer';
import HoroscopeReducer from './HoroscopeReducer';
import Counter from './CounterReducer';
import NewsPaperListReducer from './NewsPaperListReducer';

export default combineReducers({
    auth: AuthReducer,
    newsResult: NewsReducer,
    weatherResult: WeatherReducer,
    currencyResult: CurrencyReducer,
    horoscopeResult: HoroscopeReducer,
    counter:Counter,
    newsPaperListResult:NewsPaperListReducer
});
