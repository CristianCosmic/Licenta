import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


class Header extends Component {

    render() {
        const { textStyle1, textStyle2, viewStyle } = styles;

        return (
            <View style={viewStyle}>
                <Text style={textStyle1}> Press</Text>
                <Text style={textStyle2}>Alert</Text>
                <Text style={textStyle1}> .ro</Text>
                <Image style={{ width: 40, height: 40, marginLeft: 5 }} source={require('../../resources//pressHeader.png')} />
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
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        position: 'relative',
        elevation: 2,
        flexDirection: 'row',
        marginBottom:10


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
    }
};
export default Header;