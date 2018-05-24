import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, WebView } from 'react-native';

import { connect } from 'react-redux';
import { getHoroscope } from '../../actions';
import DataManager from '../../DataManager';



class Horoscope extends Component {


    componentWillMount() {
        this.user = DataManager.getInstance().getUser();
        let signs = this.getSign();
        this.props.getHoroscope(signs);

    }

    getSign() {
        let z = [
            {
                name: 'capricorn',
                startDate: 1222,
                endDate: 119,
                image: require('../../../resources/capricorn.png')
            },
            {
                name: 'aquarius',
                startDate: 120,
                endDate: 218,
                image: require('../../../resources/aquarius.png')
            },
            {
                name: 'pisces',
                startDate: 219,
                endDate: 320,
                image: require('../../../resources/pisces.png')
            },
            {
                name: 'aries',
                startDate: 321,
                endDate: 419,
                image: require('../../../resources/aries.png')
            },
            {
                name: 'taurus',
                startDate: 420,
                endDate: 520,
                image: require('../../../resources/taurus.png')
            },
            {
                name: 'gemini',
                startDate: 521,
                endDate: 620,
                image: require('../../../resources/gemini.png')
            },
            {
                name: 'cancer',
                startDate: 621,
                endDate: 722,
                image: require('../../../resources/cancer.png')
            },
            {
                name: 'leo',
                startDate: 723,
                endDate: 822,
                image: require('../../../resources/leo.png')
            },
            {
                name: 'virgo',
                startDate: 823,
                endDate: 922,
                image: require('../../../resources/virgo.png')
            },
            {
                name: 'libra',
                startDate: 923,
                endDate: 1022,
                image: require('../../../resources/libra.png')
            },
            {
                name: 'scorpio',
                startDate: 1023,
                endDate: 1121,
                image: require('../../../resources/scorpio.png')
            },
            {
                name: 'sagittarius',
                startDate: 1122,
                endDate: 1221,
                image: require('../../../resources/sagittarius.png')
            },
        ]
        const { name, image, birthday } = this.user
        const userBirthday = parseInt(birthday.split('/')[0] + birthday.split('/')[1]);
        let userZ = z.find(x => {
            return x.startDate <= userBirthday && userBirthday <= x.endDate;
        });
        if (!userZ) {
            userZ = z[0];
        }

        return userZ

    }


    renderHoroscope() {
        if (this.props.horoscopeInfo) {
            const signs = this.getSign()
            const { rootView, titleText, signView, signText, descriptionText,signImage,dateText } = styles
            const { horoscope, sunsign,date } = this.props.horoscopeInfo;

            return (
                <View style={rootView} >
                    <Text style={titleText}>Horoscope</Text>
                    <View style={signView} >
                        
                        <Text style={signText}>{sunsign}  </Text>
                        <Image style={signImage} source={signs.image} />

                    </View>
                    <Text style={dateText}>Date: {date}</Text>
                    <View>
                        
                    <Text style={descriptionText}>{horoscope}</Text>
                    
                     </View>
                </View>


            )
        }
    }

    render() {

        return (
            <View>
                {this.renderHoroscope()}
            </View>
        )
    };
}

const styles = {
    rootView: {
        flexDirection: 'column',
        marginTop: 5,
    },
    titleText: {
        alignSelf: 'center',
        marginBottom: 10,
        fontSize: 25,
        fontWeight: '400',
       

    },
    signView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 10,

    },
    signText: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
         color: '#333333'
    },
    signImage: {
        height: 30,
        width: 30
    },
    dateText:{
        alignSelf:'center',
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'normal',
        marginLeft:0
    }


}

const mapStateToProps = ({ horoscopeResult }) => {

    const horoscopeInfo = horoscopeResult.horoscopeInfo
    return { horoscopeInfo }
};
export default connect(mapStateToProps, { getHoroscope })(Horoscope);