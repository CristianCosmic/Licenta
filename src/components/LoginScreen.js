import React,{Component} from 'react';
import {View, TouchableOpacity, Text, Image,StyleSheet} from 'react-native';
import FBSDK, {LoginManager} from 'react-native-fbsdk';
import NewsList from './NewsList';
import {Actions} from 'react-native-router-flux';
import Loading from './Loading';

class LoginScreen extends Component{
   
_fbauth(){
        LoginManager.logInWithReadPermissions(['public_profile','user_photos']).then(function(result){
            if(result.grantedPermissions){
                Actions.NewsList()
            }else
                alert('Nu ai acceptat permisinuea')

        })
    }
 

render(){
     const {container,titleStyle,buttonText,buttonStyle,buttonImage,topImage}=styles;
    return(
           <View style={container}>
                
                <Image style={topImage} source={require('../../resources/newspaper.png')}/>
                <Text style={titleStyle}>Bine ați venit.</Text>
                <TouchableOpacity style={buttonStyle} onPress={this._fbauth}>
                    <Image style={buttonImage} source={require('../../resources/facebook.png')}/>
                    <Text style={buttonText}>Continuă cu Facebook</Text>
                    </TouchableOpacity>
            </View>
       
    );

}
};


const styles = StyleSheet.create({
    container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19a49a',
    flexDirection:'column'
  },
    topImage:{
         alignSelf:'center',
        justifyContent:'center',
    },

    titleStyle:{
        color:'#FFFFF9',
        fontSize:30,
        fontWeight:'bold',
        alignSelf:"center"
    },
    buttonStyle:{
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        height:60,
        borderWidth:3,
        borderColor:'#FFFFF9',
        backgroundColor:'#FFFFF9',
        marginTop:50,
        width:300,
        borderRadius:70/2,
        flexDirection:'row',
        
        

    },
    buttonImage:{
        marginRight:20,
        
    },

    buttonText:{
         color:'#19a49a',
        fontSize:20,
        fontWeight:'bold',
    }

})



export default LoginScreen;