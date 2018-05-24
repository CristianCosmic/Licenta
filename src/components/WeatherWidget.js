import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { getWeather, changeName } from '../actions';
import Header from './common/Header';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Timestamp from 'react-timestamp';
import Loading from './common/Loading';
import Error from './common/Error';
import { Actions } from 'react-native-router-flux';
import Admob from './common/Admob';


class WeatherWidget extends Component {

    componentWillMount() {
        this.props.getWeather();
    }


    onNameChange = city => {
        this.props.changeName(city);

    };
    onSendPressed = () => {

        const { city } = this.props
        this.props.getWeather(city);

    }
    renderWeatherView = () => {

        if (this.props.weatherInfo) {
            const { weather, name, sys, message } = this.props.weatherInfo;
            console.log('Weather',weather)
            if (message) {
                Alert.alert(
                    'Error has occured:', message,
                    [
                        {
                            text: 'Close', onPress: () => {
                                this.props.getWeather()
                            }
                        }
                    ]
                );
            }

            else {
                const { weather, name, sys, message, } = this.props.weatherInfo;
                const { id, description, main, icon } = weather[0];
                const temperatura = Math.round(this.props.weatherInfo.main.temp - 273.15)
                const { tempeperaturaText,
                    titleTexStyle,
                    subtitleTextStyle,
                    weatherStatusView,
                    weatherStatusImage,
                    weatherStatusDescription,
                    sunStatusView,
                    sunStatusText,
                    sunStatusImage,
                    textInputStyle,
                    backgroundImage,
                    textInputImage
                     } = styles
                if (weather.length == 0) {
                    <Loading />
                } else {
                    var backgroundColor = temperatura > 25 ? '#f0d76f' : temperatura < 0 ? '#80a9ff' : '#44bde1'
                    var backgroundImage = temperatura > 25 ? <Image style={backgroundImage} source={require('../../resources/sun.png')} /> : temperatura < 0 ? <Image style={backgroundImage} source={require('../../resources/snowflake.png')} /> : <Image style={backgroundImage} source={require('../../resources/sunCloud.png')} />
                    return (
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={textInputStyle}
                                placeholder="Type your city here..."
                                placeholderTextColor={'#718D9C'}
                                multiline={false}
                                autoCorrect={false}
                                onChangeText={this.onNameChange}
                            />

                            <TouchableOpacity
                                style={{ width: 40, height: 30, position: 'absolute', alignSelf: 'flex-end', justifyContent: 'center' }}
                                onPress={this.onSendPressed}>
                                <Image
                                    style={textInputImage}
                                    source={require('../../resources/magnifying-glass-icon.png')}
                                />
                            </TouchableOpacity>
                            <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor, }}>

                                <View>
                                    <Text style={titleTexStyle}>{name}</Text>
                                    <Text style={subtitleTextStyle}>{sys.country}</Text>
                                </View>
                                <View>
                                    {backgroundImage}
                                </View>
                                <View >
                                    <View key={id} style={weatherStatusView}>
                                        <Image style={weatherStatusImage} source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }} />
                                        <Text style={weatherStatusDescription} >{main}</Text>
                                    </View>
                                    <View style={sunStatusView}>
                                        <Image style={sunStatusImage} source={require('../../resources/sunrise.png')} />
                                        <Timestamp style={sunStatusText} time={sys.sunrise} component={Text} />
                                        <Image style={sunStatusImage} source={require('../../resources/sunset.png')} />
                                        <Timestamp style={sunStatusText} time={sys.sunset} component={Text} />
                                    </View>

                                    <Text style={tempeperaturaText}>{temperatura}°</Text>

                                </View>
                            </View>

                        </View>

                    )
                }
            }
        }

    }


    render() {
       
         
         
        return (

            <View style={{ flex: 1, overflow: 'hidden', }}>
                <Header />
                <Card cardStyle={{ marginTop: 5, flex: 1, overflow: 'hidden', }}>
                    <CardSection cardSectionStyle={{ flex: 1, padding: 0 }} >
                        {this.renderWeatherView()}
                    </CardSection>
                    
                        <Admob />
                       
                </Card>
            </View>
        )
    }

};




const styles = {
    titleTexStyle: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 5

    },
    subtitleTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 5,

    },
    weatherStatusView: {
        flexDirection: 'row',

    },
    weatherStatusImage: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        marginLeft: 15
    },
    weatherStatusDescription: {
        alignSelf: 'center',
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    sunStatusView: {
        flexDirection: 'row',
        marginTop: 3,
    },
    sunStatusImage: {
        height: 30,
        width: 30,
        marginLeft: 15
    },
    sunStatusText: {
        alignSelf: 'center',
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    tempeperaturaText: {
        fontSize: 70,
        marginTop: 10,
        marginLeft: 15,
        fontWeight: 'bold',
        marginBottom: 20,

    },
    backgroundImage: {
        alignSelf: 'center',
        height: 200,
        width: 200

    },
    textInputStyle: {
        height: 30,
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },
    textInputImage: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        justifyContent: 'center'
    }
}



const mapStateToProps = ({ weatherResult }) => {

    const weatherInfo = weatherResult.weatherInfo;
    console.log('Weather Result', weatherResult)
    return {
        weatherInfo,
        city: weatherResult.city,
        error: weatherResult.error
    };
};
export default connect(mapStateToProps, { getWeather, changeName })(WeatherWidget);