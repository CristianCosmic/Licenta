import YouTube, {YouTubeStandaloneIOS} from 'react-native-youtube';
import React,{Component} from 'react';
import {View, TouchableOpacity, Text, Image,StyleSheet} from 'react-native';
import FBSDK, {LoginManager} from 'react-native-fbsdk';
import NewsList from './NewsList';
import {Actions} from 'react-native-router-flux';
import Loading from './Loading';

const Youtube=()=>{
  return(
    <View style={{ alignItems:'center', backgroundColor:'red' , flex:1}}>
<YouTube
  videoId="TyHvyGVs42U"   // The YouTube video ID
  play={true}             // control playback of video with true/false
  fullscreen={false}       // control whether the video should play in fullscreen or inline
     controls={(1)}          // control whether the video should loop when ended

  style={{ alignSelf: 'stretch', height: 300 }}
/>
</View>
  )
}

export default Youtube;