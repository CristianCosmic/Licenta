import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Header from './common/Header';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Currency from './common/Currency';
import { increment } from '../actions';
import moment from 'moment';
import HTMLView from 'react-native-htmlview';



class NewsCard extends Component {

 constructor(props) {
    super(props);
  }

    render(props) {
        const {  actions,counter,increment } = this.props;
        const { cardView, textZoneView, titleText, descriptionText,imageView,dateText } = styles
        const { title, description, enclosure, link, author, pubDate } = this.props.item;
        console.log('Description',this.props.item)
        desc = description
            .replace(new RegExp('<p>', 'g'), '')
            .replace(new RegExp('</p>', 'g'), '')
            .replace(new RegExp('<br>', 'g'), '')
            .replace(new RegExp('<b>', 'g'), '')
            .replace(new RegExp('<a', 'g'), '')
            .replace(new RegExp('<a href=', 'g'), '')
            .replace(new RegExp('\n', 'g'), '');

          
        const dateDay = moment(pubDate).format("MMM DD YYYY");   
            
       
        return (

            <TouchableOpacity style={cardView}
                onPress={() => {
                    this.props.increment()
                    Actions.NewsDetail({ item: [this.props.item , this.props.image]})
                }} activeOpacity={1}
                    
            >
               {enclosure.link ? <Image style={imageView} source={{ uri: enclosure.link }} /> : <View/>}
                <View style={textZoneView}>
                    <Text numberOfLines={3} style={titleText}>{title}
                    </Text>
                    <Text numberOfLines={4} style={descriptionText}>{desc}</Text>
                        <Text style={dateText}>Date: {dateDay}</Text>
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
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
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
        marginBottom: 3
    },
    imageView:{
         marginTop: 10, 
         height: 130, 
         width: 125
    },
    dateText:{
        marginLeft: 3,
        color: '#404040'
    }
}





export default connect(state => ({
    counter: state.counter
}), {increment})(NewsCard);