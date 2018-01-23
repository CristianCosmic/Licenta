import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header';
import NewsCard from './NewsCard';
import {
    StackNavigator,
} from 'react-navigation';
import NewsDetail from './NewsDetail';
import axios from 'axios';
import Loading from './Loading';
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';
import { getNews } from '../actions';

class NewsList extends Component {


    componentWillMount() {
        
        console.log('News123', this.props);
        
    }


    renderNews() {
        console.log(this.state)
        return this.state.news.map(item =>
            <NewsCard key={item.title} item={item} />
        );
    }

    render() {
        const { viewStyle } = styles
        return (
            <View style={viewStyle}>
                <Header />
                <ScrollView style={{ marginBottom: 100 }}>

                    {this.renderNews()}

                </ScrollView>
            </View>
        );


    }




};
const styles = {
    viewStyle: {
        backgroundColor: '#f5f5f5',

    }
}


const mapStateToProps = ({ newsResult }) => {
	const { news, error, loading } = newsResult;
	return { news, error, loading };
};
export default connect(mapStateToProps, { getNews })(NewsList);
