import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Header from './common/Header';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';



class NewsCard extends Component {


    render() {
        const { cardView, textZoneView, titleText, descriptionText } = styles
        console.log('ce vine din ', this.props);
        const { title, description, enclosure, link } = this.props.item;
        console.log('link spre poza ', enclosure);

        desc = description
            .replace(new RegExp('<p>', 'g'), '')
            .replace(new RegExp('</p>', 'g'), '')
            .replace(new RegExp('\n', 'g'), '')
            ;


        return (

            <TouchableOpacity style={cardView} onPress={() => Actions.NewsDetail({ item: this.props.item })} activeOpacity={1}>
                <Image style={{ marginTop:15,height: 120, width: 120 }} source={{ uri: enclosure.link }} />
                <View style={textZoneView}>
                    <Text numberOfLines={3} style={titleText}>{title}
                    </Text>
                    <Text numberOfLines={5} style={descriptionText}>{desc}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = {
    cardView: {
        height: 150,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        paddingBottom: 20
    },
    textZoneView: {
        flexDirection: 'column',
        flex: 1,
        marginTop:10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom:5
    },
    titleText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    descriptionText: {
        color: 'grey',
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5,
        marginBottom:50
    },
}

export default NewsCard;
