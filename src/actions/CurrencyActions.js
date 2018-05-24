import{
    CURRENCY_RETRIEVED_FAILED,
	CURRENCY_RETRIEVED_SUCCESS,
	CURRENCY_RETRIEVAL_START,
	CURRENCY_NOT_FOUND,
} from './types';

export const getCurrency = ()=>{
    const apiURL =`https://api.fixer.io/latest`
	return dispatch => {
	dispatch({ type: CURRENCY_RETRIEVAL_START });
    fetch(apiURL,{
        method:'GET'
    })
    .then(response =>
    response.json().then(responseJson => {
				console.log('response COsmic', responseJson);
				if (responseJson) {
					dispatch({
						type: CURRENCY_RETRIEVED_SUCCESS,
						payload: {
							currencyInfo: responseJson
						}
					});
				} else {
					dispatch({ type: CURRENCY_NOT_FOUND, payload: {}});
				}
			})
		)
		
	}
};