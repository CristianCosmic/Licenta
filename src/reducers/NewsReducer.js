import {
	NEWS_RETRIEVED_SUCCESS,
	NEWS_RETRIEVED_FAILED,
	NEWS_RETRIEVAL_START,
	NEWS_NOT_FOUND,
} from '../actions/types';

const INITIAL_STATE = {
	news: {},
	loading: true,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	console.log('action type', action.type);
	console.log('action payload', action.payload);
	console.log('......');
	
	switch (action.type) {
		case NEWS_RETRIEVAL_START:
			return {
				...state,
				error: null,
				news: null,
				loading: true
			};
		case NEWS_RETRIEVED_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				news: action.payload.news
			};
		case NEWS_RETRIEVED_FAILED:
			return {
				...state,
				loading: false,
				news: null,
				error: action.payload
			};
		case NEWS_NOT_FOUND:
			return {
				...state,
				loading: false,
				news: null,
				error: null
			};
		default:
			return state;
	}
};
