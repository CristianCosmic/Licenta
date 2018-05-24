
import { NEWSPAPER_REFRESH, NEWSPAPER_FILTER_CHANGED, NEWSPAPER_LOAD_SUCCESS, NEWSPAPER_LOAD_ERROR,CHANGE_POSITION,USER_RETREIVAL_SUCCESS,NEWSPAPER_RETRIEVED_SUCCESS,NEWSPAPER_RETRIEVAL_START } from '../actions/types';
import DataManager from '../DataManager';
import { Actions } from 'react-native-router-flux';


const INITIAL_STATE = {
    newsPaper:[],
    filteredNews: [],
    filter: null,
    countChange: null,
    favorites:null,
    loading:false

}




export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
         case NEWSPAPER_RETRIEVAL_START:
            return {
                ...state,
                loading:true,
                newsPaper: action.payload,

            };
        case NEWSPAPER_RETRIEVED_SUCCESS:
        console.log('here',filterCards(action.payload, state.filter))
            return {
                ...state,
                newsPaper: action.payload.newsPaper,
                loading:false,
                filteredNews: filterCards(action.payload.newsPaper, state.filter)
            };
        case NEWSPAPER_FILTER_CHANGED:
             console.log('- got here1',filterCards(state.newsPaper, action.payload));
            return {
                ...state,
                filter: action.payload,
                filteredNews: filterCards(state.newsPaper, action.payload)
            };
        case NEWSPAPER_LOAD_ERROR:
            return INITIAL_STATE;
        case NEWSPAPER_REFRESH:
            return {
                ...state,
                newsPaper: state.newsPaper.slice()
            }
        default:
            return state;
    }
}



const filterCards = (newsPaper, filter) => {
    
    if (!filter) {
        return newsPaper;
    }
    return newsPaper.filter(newsPaper => newsPaper.name.toUpperCase().includes(filter.toUpperCase()));
}
