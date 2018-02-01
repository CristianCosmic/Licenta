import { LOGIN_SUCCESS } from './types';
import DataManager from "../DataManager";
import { Actions } from 'react-native-router-flux';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';



export const checkLogin = () => {
    return (dispatch) => {
        DataManager.getInstance().loadUser().then(() => {
            const user = DataManager.getInstance().getUser();
            console.log('stored user:', user)
            if (user != null) {
                Actions.NewsList({});
            } else {
                Actions.LoginScreen({});
            }
        });
    }
}

export const facebookLogin = () => {
    return (dispatch) => {
        LoginManager.logInWithReadPermissions(['public_profile', 'user_photos']).then(function (result) {
            if (result.grantedPermissions) { // sau result.credentials.token

                AccessToken.getCurrentAccessToken().then(
                    (data) => {

                        console.log('facebook longin data: ', data);

                        var user = {};
                        user.token = data.accessToken;
                        user.image = `https://graph.facebook.com/v2.3/${data.userID}/picture?type=square`

                        const api = `https://graph.facebook.com/v2.3/${data.userID}?fields=name&access_token=${data.accessToken}`;

                        fetch(api)
                            .then((response) => response.json())
                            .then((responseData) => {

                                console.log('fb response', responseData)
                                user.name = responseData.name
                                // all in user 
                                DataManager
                                    .getInstance()
                                    .setUser(user);
                            })

                    }).catch((error) => {
                        console.log('facebook image request error:', error);
                    });



            }

            Actions.NewsList()
        });
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
    Actions.NewsList({});
}

