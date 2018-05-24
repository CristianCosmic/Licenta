import {
	WEATHER_RETRIEVED_SUCCESS,
	WEATHER_RETRIEVED_FAILED,
	WEATHER_RETRIEVAL_START,
	WEATHER_NOT_FOUND,
	WEATHER_CHANGED_NAME
} from '../actions/types';

const INITIAL_STATE = {
	weatherInfo: null,
	loading: true,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case WEATHER_RETRIEVAL_START:
			return {
				...state,
				error: null,
				weatherInfo: null,
				loading: true
			};
		case WEATHER_RETRIEVED_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				weatherInfo: action.payload.weatherInfo
			};
		case WEATHER_RETRIEVED_FAILED:
			return {
				...state,
				loading: false,
				weatherInfo: null,
				error: action.payload
			};
		case WEATHER_NOT_FOUND:
			return {
				...state,
				loading: false,
				weatherInfo: null,
				error: null
			};
			case WEATHER_CHANGED_NAME:
			return {
				...state,
				city: action.payload
			};
		default:
			return state;
	}
};
