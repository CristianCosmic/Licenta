import {
    INCREMENT,
    USER_RETREIVAL_SUCCESS
} from '../actions/types';
import DataManager from '../DataManager'


const INITIAL_STATE = {
    count: 0
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            DataManager.getInstance().setCounter(state.count+1)
            return {
                ...state,
                count: state.count + 1
                
            };
            case USER_RETREIVAL_SUCCESS:
            return {
                ...state,
                count: action.payload.user.counter
            }
        default:
            return state;
    }
}