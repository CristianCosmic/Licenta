import {
    HOROSCOPE_RETRIEVED_SUCCESS,
    HOROSCOPE_RETRIEVED_FAILED,
    HOROSCOPE_RETRIEVAL_START,
    HOROSCOPE_NOT_FOUND,
} from '../actions/types';

const INITIAL_STATE = {
    horoscopeInfo: null,
    loading: true,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HOROSCOPE_RETRIEVAL_START:
            
            return {
                ...state,
                error: null,
                horoscopeInfo: null,
                loading: true
            };
        case HOROSCOPE_RETRIEVED_SUCCESS:
          
            return {
                ...state,
                loading: false,
                error: null,
                horoscopeInfo: action.payload.horoscopeInfo
            };
        case HOROSCOPE_RETRIEVED_FAILED:
            return {
                ...state,
                loading: false,
                horoscopeInfo: null,
                error: action.payload
            };
        case HOROSCOPE_NOT_FOUND:
            return {
                ...state,
                loading: false,
                horoscopeInfo: null,
                error: null
            };
        default:
            return state;
    }
};
