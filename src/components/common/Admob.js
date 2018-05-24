import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, WebView } from 'react-native';
import { connect } from 'react-redux';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

class Admob extends Component {
render(){
  const {admobView}=styles
    return(
      <View style={admobView} >
   <AdMobBanner
  adSize='banner'
  adUnitID='ca-app-pub-5688714756765295/1941392352'
  //Test ca-app-pub-3940256099942544/2934735716
  //Andrei ca-app-pub-7591504396309509/3028596980
  //Licenta ca-app-pub-5688714756765295/1941392352
  //Licenta2 ca-app-pub-5688714756765295/1561192369
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.log('Admob profile',error)}
/>
</View>
    )
}
};
const styles={
  admobView:{ 
    alignItems: 'center',
  justifyContent: 'center' 
}
}
export default Admob
