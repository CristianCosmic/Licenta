import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Header from './Header'


class NewsDetail extends Component {
    
    render() {
        const { containerStyle, titleView, titleText, imageView, descriptionText } = styles
        return (
            <View style={containerStyle}>
                <Header />

                <ScrollView style={{width:'100%'}}>
                    <View style={titleView}>
                        <Text style={titleText} numberOfLines={4}>Directorul Operei Române din Timișoara, Corneliu Murgu, a intrat cu BMW-ul în clădirea instituției. Cum au încercat angajații să ascundă incidentul UPDATE Cum s-a produs accidentul</Text>
                    </View>
                    <View style={{paddingLeft: 5, paddingRight: 5, paddingBottom: 20}}>
                    <Image style={imageView} source={require('../../resources/accident-opera-2.jpg')} /> 
                    </View>
                    <Text style={descriptionText}>Un accident de circulație mai puțin obișnuit s-a petrecut în această dimineață în plin centrul Timișoarei. Un BMW a ajuns din parcarea Hotelului Timișoara pe strada pietonală Mărășești și a izbit puternic clădirea Operei, în zona intrării artiștilor. Automobilul a fost avariat serios, iar Ambulanța a fost solicitată la fața locului. La volan se afla chiar managerul Operei Române din Timișoara, Corneliu Murgu, acesta fiind transportat la Spitalul Municipal. Mai mulți oameni, angajați ai Operei, au încercat să ridice mașina și să o ducă în curtea interioară, fără a suna la poliție pentru a anunța accidentul. La locul incidentului a sosit un echipaj de la Secția 1 Poliție și unul de la Poliția Rutieră, oamenii legii au interzis celor care doreau să mute mașina să se mai atingă de autovehicul. În timp ce jurnalistul PRESSALERT.ro filma și fotografia la locul accidentului, unul dintre cei prezenți a devenit extrem de violent, a cerut să nu fie filmat și a smuls reporterului telefonul din mână. Ulterior, acesta a intrat în mașina implicată în accident.</Text>

                </ScrollView>
            </View>
        );
    }
};
const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        width:'100%'

    },
    titleView: {
        backgroundColor: '#f5f5f5',
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',

    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10



    },
    imageView: {
        width: '100%',        
        borderRadius: 10,
        aspectRatio: 1.77,
        height:undefined
    },

    descriptionText: {
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 15,
        marginBottom:20

    }
}
export default NewsDetail;