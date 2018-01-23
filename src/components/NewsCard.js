import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Header from './Header';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';



class NewsCard extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            title: props.item.title,
            description: props.item.description,
            image: props.item.enclosure.link
        }
    }

    render() {
        const { cardView, textZoneView, titleText, descriptionText } = styles

        desc = this.state.description
            .replace(new RegExp('<p>', 'g'), '')
            .replace(new RegExp('</p>', 'g'), '')
            .replace(new RegExp('\n', 'g'), '')
            ;

        return (

            <TouchableOpacity style={cardView} onPress={() => Actions.NewsDetail()}>
                <Image style={{ height: 90, width: 120 }} source={{ uri: this.state.image }} />
                <View style={textZoneView}>
                    <Text numberOfLines={2} style={titleText}>{this.state.title}
                    </Text>
                    <Text numberOfLines={4} style={descriptionText}>{desc}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = {
    cardView: {
        height: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        margin: 5,
        paddingBottom: 20
    },
    textZoneView: {
        flexDirection: 'column',
        flex: 1
    },
    titleText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    descriptionText: {
        color: 'red',
        fontSize: 10,
        marginTop: 5,
        marginLeft: 5,
    },
}

export default NewsCard;