import {
	CURRENCY_RETRIEVED_SUCCESS,
	CURRENCY_RETRIEVED_FAILED,
	CURRENCY_RETRIEVAL_START,
	CURRENCY_NOT_FOUND,
} from '../actions/types';

const INITIAL_STATE = {
	currencyInfo: null,
	loading: true,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CURRENCY_RETRIEVAL_START:
       
			return {
				...state,
				error: null,
				currencyInfo: null,
				loading: true
			};
		case CURRENCY_RETRIEVED_SUCCESS:
       
			return {
				...state,
				loading: false,
				error: null,
				currencyInfo: action.payload.currencyInfo
			};
		case CURRENCY_RETRIEVED_FAILED:
			return {
				...state,
				loading: false,
				currencyInfo: null,
				error: action.payload
			};
		case CURRENCY_NOT_FOUND:
			return {
				...state,
				loading: false,
				currencyInfo: null,
				error: null
			};
		default:
			return state;
	}
};
