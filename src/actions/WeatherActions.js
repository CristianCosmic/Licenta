import{
    WEATHER_RETRIEVED_FAILED,
	WEATHER_RETRIEVED_SUCCESS,
	WEATHER_RETRIEVAL_START,
	WEATHER_NOT_FOUND,
} from './types';

export const getWeather = ()=>{
    const apiURL =`http://api.openweathermap.org/data/2.5/weather?q=Timisoara,ro&appid=9e8bb91924ba7794cbab2f0606d941f8`
	return dispatch => {
	dispatch({ type: WEATHER_RETRIEVAL_START });
    fetch(apiURL,{
        method:'GET'
    })
    .then(response =>
    response.json().then(responseJson => {
				console.log('response COs2', responseJson);
				if (responseJson) {
					dispatch({
						type: WEATHER_RETRIEVED_SUCCESS,
						payload: {
							weather: responseJson
						}
					});
				} else {
					dispatch({ type: WEATHER_NOT_FOUND, payload: {}});
				}
			})
		)
		
	}
};