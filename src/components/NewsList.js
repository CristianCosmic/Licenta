import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from './common/Header';
import NewsCard from './NewsCard';
import {
    StackNavigator,
} from 'react-navigation';
import NewsDetail from './NewsDetail';
import Error from './common/Error';
import index from './common/index';
import Loading from './common/Loading';
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';
import { getNews } from '../actions';
import TabBar from './common/TabBar';

class NewsList extends Component {


    componentWillMount() {
        this.props.getNews();
        //console.log('News123', this.props);
        
    }


    renderNews() {
        
       const { items } = this.props.news;

        return items.map((item,i)=>
            <NewsCard key={item.title} item={item} />
        );
    }

    render() {

       const  { error, loading, news} = this.props; 

       if (loading) {
           return <Loading />
       }

       if (error) {
           return <Error />
       }

       if (!news) {
           return <View />;
       }

        const { viewStyle } = styles
        
        return (
            <View style={viewStyle}>
                <Header />
                <ScrollView style={{ marginBottom: 120 }}>
                   
                    {this.renderNews()}
                
                </ScrollView>
                <TabBar/>
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
