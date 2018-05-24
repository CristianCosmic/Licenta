import {
    LOGIN_SUCCESS,
    USER_RETREIVAL_SUCCESS,
    INCREMENT
} from '../actions/types';
import DataManager from '../DataManager';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
    error: '',
    loading: false,
    token: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loading: false
            };
        case USER_RETREIVAL_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loading: false
            }
        default:
            return state;
    }
};