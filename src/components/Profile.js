import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from './common/Header';
import Card from './common/Card';
import CardSection from './common/CardSection';
import { connect } from 'react-redux';
import TabBar from './common/TabBar';
import { getWeather } from '../actions';


class Profile extends Component {
    componentWillMount() {
          this.props.getWeather()
        console.log('News123', this.props);
        
    }


    render() {
      
        const { profileImage, rootView, nameText } = styles

        return (
            <View>
                <Header />
                <Card cardStyle={rootView}>
                    <CardSection>
                        <Image style={profileImage} source={require('../../resources/newspaper.png')} />
                    </CardSection>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', margin: 10 }}>
                        <Text style={nameText}>Cristian Cosmic</Text>
                    </View>
                    <View>

                    </View>
                </Card>
                <Card>
                    <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholder='Search'
                    />
                    </Card>
            </View>
        )
    }

};

const styles = {
    rootView: {
        marginTop: 70
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
        fontWeight: 'bold'
    }
}



const mapStateToProps = ({ weatherResult }) => {

    const { name } = weatherResult;
    return { name };
};
export default connect(mapStateToProps, { getWeather })(Profile);