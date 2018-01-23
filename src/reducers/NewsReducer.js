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
	switch (action.type) {
		case NEWS_RETRIEVAL_START:
			return {
				...state,
				error: null,
				poll: null,
				loading: true
			};
		case NEWS_RETRIEVED_SUCCESS:
			return {
				...state,
				loading: false,
				eroor: null,
				poll: action.payload.poll
			};
		case NEWS_RETRIEVED_FAILED:
			return {
				...state,
				loading: false,
				poll: null,
				error: action.payload
			};
		case NEWS_NOT_FOUND:
			return {
				...state,
				loading: false,
				poll: null,
				error: null
			};
		default:
			return state;
	}
};
