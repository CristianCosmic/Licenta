import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  ActionConst,
  Router,
  Scene,
  Stack,
  Actions,
  Modal,
  Overlay,
  Lightbox
} from 'react-native-router-flux';
import Header from './components/Header';
import NewsList from './components/NewsList';
import NewsCard from './components/NewsCard';
import NewsDetail from './components/NewsDetail';
import LoginScreen from './components/LoginScreen';
import Loading from './components/Loading';
import YouTube from './components/YouTube';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" component={LoginScreen}  hideNavBar title="">
          </Scene>
          <Scene key="NewsList" component={NewsList} initial navTransparent={true} title="">
          </Scene>
          <Scene
            key="NewsDetail"
            component={NewsDetail}
            navTransparent={true}
            
            >
      
          </Scene>
        </Scene>
      </Router>
    );
  }
}