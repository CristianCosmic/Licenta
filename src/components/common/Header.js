import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getWeather } from '../../actions';
import { connect } from 'react-redux';


class Header extends Component {
     constructor(props) {
        super(props);
    }
    render(props) {
        const { textStyle1, textStyle2, viewStyle,imageStyle } = styles;
        console.log('iMAGE',this.props.image)
        return (

            <View style={viewStyle}>
             
                <Image style={imageStyle} source={{uri:this.props.image}} />  
                <TouchableOpacity 
                onPress={() => {
                    Actions.WeatherWidget()
                    this.props.getWeather()
                }}
                    style={{ position: 'absolute', top: 15, right: 0, alignSelf: 'center' }}
                >
                
                    <Image style={{ justifyContent: 'space-around', width: 35, height: 35, }} source={require('../../../resources/cloudy.png')} />
                    <Text style={{ right: 8 }}>Weather</Text>
                </TouchableOpacity>
            </View>

        );
    }
};

const styles = {
    viewStyle: {
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        position: 'relative',
        elevation: 2,


    },
    textStyle1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
    },
    textStyle2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FEDC32',
    },
    imageStyle:{
        width:150,
        height:50
    }
};
export default connect(null, { getWeather })(Header)