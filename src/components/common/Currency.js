import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, WebView } from 'react-native';
import { connect } from 'react-redux';
import { getCurrency } from '../../actions';
import Loading from './Loading';

class Currency extends Component {


    componentWillMount() {
        this.props.getCurrency();
    }

    render() {
        if (this.props.currencyInfo) {
            const { cardView, currencyView, currencyText, currencyImage } = styles
            const { base, rates } = this.props.currencyInfo
            return (
                <View style={cardView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={currencyView} >
                            <Image style={currencyImage} source={require('../../../resources/european-union.png')} />
                            <Text style={currencyText}>  1 EUR = {Math.floor(rates.RON * 1000) / 1000} RON</Text>
                        </View>
                        <View style={currencyView} >
                            <Image style={currencyImage} source={require('../../../resources/united-kingdom.png')} />
                            <Text style={currencyText}>  1 GBP = {Math.floor(rates.RON / rates.GBP * 1000) / 1000} RON</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={currencyView} >
                            <Image style={currencyImage} source={require('../../../resources/united-states.png')} />
                            <Text style={currencyText}>  1 USD = {Math.floor(rates.RON / rates.USD * 1000) / 1000} RON</Text>
                        </View>
                        <View style={currencyView} >
                            <Image style={currencyImage} source={require('../../../resources/hungary.png')} />
                            <Text style={currencyText}>  1 HUF = {Math.floor(rates.RON / rates.HUF * 1000) / 1000} RON</Text>
                        </View>
                    </View>

                </View>
            )
        } else
            return (<View style={{ height: 10, backgroundColor: 'white' }} />)
    }


}
const styles = {
    cardView: {
        height: 40,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        backgroundColor: '#f5f5f5'
    },
    currencyView: {
        flexDirection: 'row',
        width: 150,
        marginRight: 2
    },
    currencyImage: {
        height: 20,
        width: 25,
        alignSelf: 'center',
    },
    currencyText: {
        fontSize: 12,
        alignSelf: 'center',
    }
}

const mapStateToProps = ({ currencyResult }) => {

    console.log('Base123', currencyResult)
    const currencyInfo = currencyResult.currencyInfo
    return { currencyInfo }
};
export default connect(mapStateToProps, { getCurrency })(Currency);