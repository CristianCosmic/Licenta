import{
    HOROSCOPE_RETRIEVED_FAILED,
	HOROSCOPE_RETRIEVED_SUCCESS,
	HOROSCOPE_RETRIEVAL_START,
	HOROSCOPE_NOT_FOUND,
} from './types';


export const getHoroscope = (signs)=>{
   
    const apiURL =`http://sandipbgt.com/theastrologer/api/horoscope/${signs.name}/today/`
	console.log('sign: ......',apiURL)
	return dispatch => {
	dispatch({ type: HOROSCOPE_RETRIEVAL_START });
    fetch(apiURL,{
        method:'GET'
    })
    .then(response =>
    response.json().then(responseJson => {
				console.log('response COsmic', responseJson);
				if (responseJson) {
					dispatch({
						type: HOROSCOPE_RETRIEVED_SUCCESS,
						payload: {
							horoscopeInfo: responseJson
						}
					});
				} else {
					dispatch({ type: HOROSCOPE_NOT_FOUND, payload: {}});
				}
			})
		)
		
	}
};