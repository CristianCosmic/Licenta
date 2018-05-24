import { LOGIN_SUCCESS,USER_RETREIVAL_SUCCESS } from './types';
import DataManager from "../DataManager";
import { Actions } from 'react-native-router-flux';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';



export const checkLogin = () => {
    return (dispatch) => {
        DataManager.getInstance().loadUser().then(() => {
            const user = DataManager.getInstance().getUser();
            console.log('stored user:', user)
            if (user != null) {
                dispatch({
                    type: USER_RETREIVAL_SUCCESS,
                    payload: {
                        user: user
                    }
                })
                Actions.NewsPaperList({});
            }
        });
    }
}

export const facebookLogin = () => {
    console.log('will login with facebook');
    return (dispatch) => {
        LoginManager.logInWithReadPermissions(['public_profile', 'user_photos', 'user_birthday'])
            .then(function (result) {
                console.log('stored result:', result)
                if (result.grantedPermissions) { // sau result.credentials.token

                    AccessToken.getCurrentAccessToken().then(
                        (data) => {

                            console.log('stored data:', data)

                            var user = {};

                            user.token = data.accessToken;
                            user.image = `https://graph.facebook.com/v2.3/${data.userID}/picture?type=large`;
                            const api = `https://graph.facebook.com/v2.3/${data.userID}?fields=name&access_token=${data.accessToken}`;
                            const api2 = `https://graph.facebook.com/v2.3/${data.userID}?fields=birthday&access_token=${data.accessToken}`;
                            fetch(api2)
                                .then((response) => response.json())
                                .then((responseData) => {
                                    user.birthday = responseData.birthday
                                    // all in user 
                                    DataManager
                                        .getInstance()
                                        .setUser(user);
                                    dispatch({
                                        type: LOGIN_SUCCESS,
                                        payload: {
                                            user: user
                                        }
                                    })
                                })
                            fetch(api)
                                .then((response) => response.json())
                                .then((responseData) => {
                                    user.name = responseData.name
                                    // all in user 
                                    DataManager
                                        .getInstance()
                                        .setUser(user);
                                    dispatch({
                                        type: LOGIN_SUCCESS,
                                        payload: {
                                            user: user
                                        }
                                    })
                                    Actions.NewsPaperList()
                                })
                        }).catch((error) => {
                            console.log('facebook image request error:', error);
                        });
                }

            })
            .catch((error) => {
                console.log('facebook error:', error);
            });
        ;
    }
}


export const getUser = () => {
    return (dispatch) => {
        DataManager
            .getInstance()
            .getUser();
        console.log('dispatch to redux');
        dispatch({
            type: USER_RETREIVAL_SUCCESS,
            payload: {
                user: user
            }
        })
    }
}

const loginSuccess = (dispatch, user) => {
    console.log('loginSuccess');
    DataManager
        .getInstance()
        .setToken(user.token);
    console.log('dispatch to redux');
    dispatch({
        type: LOGIN_SUCCESS,
        payload: {
            token: user.token
        }
    })
    console.log('open stations');
    Actions.NewsPaperList({});
}

