import {
	WEATHER_RETRIEVED_SUCCESS,
	WEATHER_RETRIEVED_FAILED,
	WEATHER_RETRIEVAL_START,
	WEATHER_NOT_FOUND,
} from '../actions/types';

const INITIAL_STATE = {
	weather: {},
	loading: true,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	console.log('action type', action.type);
	console.log('action payload', action.payload);
	console.log('......');
	
	switch (action.type) {
		case WEATHER_RETRIEVAL_START:
			return {
				...state,
				error: null,
				weather: null,
				loading: true
			};
		case WEATHER_RETRIEVED_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				weather: action.payload.weather
			};
		case WEATHER_RETRIEVED_FAILED:
			return {
				...state,
				loading: false,
				weather: null,
				error: action.payload
			};
		case WEATHER_NOT_FOUND:
			return {
				...state,
				loading: false,
				weather: null,
				error: null
			};
		default:
			return state;
	}
};
