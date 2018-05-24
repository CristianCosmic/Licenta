import {
	NEWSPAPER_RETRIEVAL_START,
	NEWSPAPER_RETRIEVED_SUCCESS,
	NEWSPAPER_NOT_FOUND,
	NEWSPAPER_FILTER_CHANGED,
	NEWSPAPER_LOAD_SUCCESS,
	NEWSPAPER_LOAD_ERROR,
	CHANGE_POSITION,
	NEWSPAPER_REFRESH
} from './types'
import DataManager from '../DataManager'



export const getNewsPaper = () => {
	const apiURL =
		//`https://api.rss2json.com/v1/api.json?rss_url=https://magnanews.ro/feed/`
		`https://editor-dev.audionowdigital.com/api/demoresources/list`
	//`https://api.rss2json.com/v1/api.json?rss_url=http://www.tion.ro/feed`
	return dispatch => {
		dispatch({ type: NEWSPAPER_RETRIEVAL_START });
		fetch(apiURL, {
			method: 'GET',
		})
			.then(response =>
				response.json().then(responseJson => {
					console.log('response COs', responseJson);
					if (responseJson) {
						dispatch({
							type: NEWSPAPER_RETRIEVED_SUCCESS,
							payload: {
								newsPaper: responseJson
							}
						});
					} else {
						dispatch({ type: NEWSPAPER_NOT_FOUND, payload: {} });
					}
				})
			)

	}
};

export const filterChanged = (text) => {
	 console.log('Fliter==',text);
	return { type: NEWSPAPER_FILTER_CHANGED, payload: text };
};

export const changePosition = (slectorCount) => {
	 console.log('Count Change', slectorCount)
	return dispatch => {
		dispatch({ 
		type: CHANGE_POSITION,
		payload: {
			countChange: slectorCount
				}
	});
}
}

export const refreshList = () => {
	return { type: NEWSPAPER_REFRESH}
}