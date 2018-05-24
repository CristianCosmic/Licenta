import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, WebView } from 'react-native';
import Header from './common/Header';
import Card from './common/Card';
import CardSection from './common/CardSection';
import { connect } from 'react-redux';
import TabBar from './common/TabBar';
import { getCurrency } from '../actions';
import DataManager from '../DataManager';
import Loading from './common/Loading';
import Horoscope from './common/Horoscope';
import StarRating from './common/StarRating';
import Admob from './common/Admob';



class Profile extends Component {
    componentWillMount() {
        this.user = DataManager.getInstance().getUser();
    }


    renderStars() {
        const { count } = this.props
        if(count){
        if (count >= 0) {
            return '1'
        }
        if (count > 10 && count <= 20) {
            return '2'
        }
        if (count > 20 && count <= 30) {
            return '3'
        }
        if (count > 30 && count <= 40) {
            return '4'
        }
        if (count > 40 ){
            return '5'
        }
         return '1'
    }
    }


    render() {
        const { profileImage, rootView, nameText, postsRead, nameView } = styles
        const { name, image, birthday } = this.user
        const { count } = this.props
        console.log('user123', this.user);

        return (
            <View style={{ flex: 1 }}>
                <Header />

                <ScrollView >
                    <Card cardStyle={rootView}>
                        <CardSection>
                            <Image style={profileImage} source={{ uri: image }} />
                        </CardSection>
                        <View style={nameView}>
                            <Text style={nameText}>{name}</Text>
                        </View>
                        <CardSection >
                            <Text style={postsRead} >Number of posts read: {count ? count:0} </Text>
                            <StarRating coloured={this.renderStars()} />
                            <Horoscope />
                        </CardSection>
                    </Card>

                </ScrollView>
                    <Admob />
            </View>
        )
    }

};

const styles = {
    rootView: {
        marginTop: 70,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        alignSelf: 'center',
        marginTop: -65
    },
    nameText: {
        color: '#4A4A4A',
        fontSize: 20,
        fontWeight: 'bold',
    },

    postsRead:
    {
        marginLeft: 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#9B9B9B'
    },

    nameView:
    {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10
    }
}



const mapStateToProps = ({ currencyResult, counter }) => {

    const currencyInfo = currencyResult;
    const count = counter.count
    return { currencyInfo, count }
};
export default connect(mapStateToProps, { getCurrency })(Profile);