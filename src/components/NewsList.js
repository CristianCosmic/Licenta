import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Button,createReactClass } from 'react-native';
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
import { getNews, getWeather,getNewsPaper } from '../actions';
import TabBar from './common/TabBar';
import { Actions } from 'react-native-router-flux';
import Currency from './common/Currency';
import Admob from './common/Admob';
import TimerMixin from 'react-timer-mixin';



class NewsList extends Component {


    componentWillMount() {
        const rssUrl = this.props.item[0]
        this.props.getNews(rssUrl);
        
        
 
    }
    componentDidMount(){
    setInterval(() => {
         const rssUrl = this.props.item[0]
         this.props.getNews(rssUrl);
    }, 3600000);
    }
    constructor(props) {
        super(props);
    }
   
    render() {
        const { error, loading, news } = this.props;
         const image = this.props.item[1]
         console.log('sendIma',image)
        if (loading) {
            return <Loading />
        }

        if (error) {
            return <Error />
        }

        if (!news) {
            return <Loading />;
        }

        const { viewStyle,backButton,backButtonImage } = styles
         const rssUrl = this.props.item[0]
        return (
            <View style={viewStyle}>
                
                <Header image={image} /> 
                <TouchableOpacity onPress={() => {
                    Actions.pop()
                }}
                    style={backButton}
                >
                    <Image style={backButtonImage} source={require('../../resources/left-arrow.png')} />
                </TouchableOpacity>

                <Currency />
                <FlatList
                    data={this.props.news.items}
                    renderItem={({ item }) =>
                        <NewsCard image={image} key={item.title} item={item} />

                    }
                    refreshing={false}
                    keyExtractor={(item, index) => item.id}
                    onRefresh={() => this.props.getNews(rssUrl)}
                />
                    <Admob />
            </View >
        );


    }




};
const styles = {
    viewStyle: {
        backgroundColor: '#f5f5f5',
        flex: 1

    },
    backButton:{
         position: 'absolute',
          marginTop: 32, 
          left: 0, 
          alignSelf: 'center',
    },
    backButtonImage:{
        width: 23, 
        height: 23, 
        marginLeft: 10 
    }
}


const mapStateToProps = ({ newsResult}) => {
    const { news, error, loading, increment } = newsResult;
    return { news, error, loading, increment };
};
export default connect(mapStateToProps, { getNews, getWeather })(NewsList);
