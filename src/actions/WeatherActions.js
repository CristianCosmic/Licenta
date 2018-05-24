import{
    WEATHER_RETRIEVED_FAILED,
	WEATHER_RETRIEVED_SUCCESS,
	WEATHER_RETRIEVAL_START,
	WEATHER_NOT_FOUND,
	WEATHER_CHANGED_NAME
} from './types';

export const getWeather = (city) =>{
	  if(city==undefined){
		city='Timisoara'
	  }
    const apiURL =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e8bb91924ba7794cbab2f0606d941f8`

	return dispatch => {
	dispatch({ type: WEATHER_RETRIEVAL_START });
    fetch(apiURL,{
        method:'GET'
    })
    .then(response =>
    response.json().then(responseJson => {
				console.log('response COs', responseJson);
				if (responseJson) {
					dispatch({
						type: WEATHER_RETRIEVED_SUCCESS,
						payload: {
							weatherInfo: responseJson
						}
					});
				} else {
					dispatch({ type: WEATHER_NOT_FOUND, payload: {}});
				}
			})
		)
		.catch(error => {
				dispatch({ type: WEATHER_RETRIEVAL_FAILED, payload: error.message });
				console.log('error SMG',error.message);
			});
	}
};

export const changeName = city => ({
	
	type: WEATHER_CHANGED_NAME,
	payload: city
	
}
);

