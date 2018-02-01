import {
    LOGIN_SUCCESS,
} from '../actions/types';
import DataManager from '../DataManager';
import {Actions} from 'react-native-router-flux';

const INITIAL_STATE = {
    error: '',
    loading: false,
    token: null
}

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                loading: false
            }
        default:
            return state;
    }
}