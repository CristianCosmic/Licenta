import {
    	INCREMENT,
		USER_RETREIVAL_SUCCESS
}from './types';
import DataManager from '../DataManager'




export const increment = () => {
	return {
		type: INCREMENT
	};
}