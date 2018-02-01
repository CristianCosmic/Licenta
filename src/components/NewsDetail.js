import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Header from './common/Header'
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
class NewsDetail extends Component {

    render() {
        const { containerStyle, titleView, titleText, imageView, descriptionText } = styles
        const { title, description, enclosure } = this.props.item;
        desc = description
            .replace(new RegExp('<p>', 'g'), '')
            .replace(new RegExp('</p>', 'g'), '')
            .replace(new RegExp('\n', 'g'), '')
            ;
        return (
            <View style={containerStyle}>
                <Header />

                <ScrollView style={{ width: '100%' }}>
                    <View style={titleView}>
                        <Text style={titleText} numberOfLines={4}>{title}</Text>
                    </View>
                    <View style={{ paddingLeft: 5, paddingRight: 5, paddingBottom: 20 }}>
                        <Image style={imageView} source={{ uri: enclosure.link }} />
                    </View>
                    <HTMLView value = {description} style={descriptionText}/>
                    
                </ScrollView>
                
            </View>
            
        );
    }
};
const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        width: '100%'

    },
    titleView: {
        backgroundColor: '#f5f5f5',

        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15

    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10



    },
    imageView: {
        width: '100%',
        borderRadius: 10,
        aspectRatio: 1.77,
        height: undefined
    },

    descriptionText: {
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20

    }
}

export default NewsDetail;
