import {
	NEWS_RETRIEVED_FAILED,
	NEWS_RETRIEVED_SUCCESS,
	NEWS_RETRIEVAL_START,
	NEWS_NOT_FOUND,
} from './types';

export const getNews = (rssUrl) => {
console.log('CONSLONE LOG RSS123',rssUrl)
	const apiURL = rssUrl
		//`https://api.rss2json.com/v1/api.json?rss_url=https://magnanews.ro/feed/`
		// `https://api.rss2json.com/v1/api.json?rss_url=https://www.pressalert.ro%2Ffeed%2F`
	//`https://api.rss2json.com/v1/api.json?rss_url=http://www.tion.ro/feed`
	return dispatch => {
		dispatch({ type: NEWS_RETRIEVAL_START });
		fetch(apiURL, {
			method: 'GET'
		})
			.then(response =>
				response.json().then(responseJson => {
					if (responseJson) {
						dispatch({
							type: NEWS_RETRIEVED_SUCCESS,
							payload: {
								news: responseJson
							}
						});
					} else {
						dispatch({ type: NEWS_NOT_FOUND, payload: {} });
					}
				})
			)

	}
};

