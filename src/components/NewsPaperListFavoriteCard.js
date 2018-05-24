
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import Card from './common/Card';
import Loading from './common/Loading';
import CardSection from './common/CardSection';
import { Actions } from 'react-native-router-flux'
import { changePosition, getNewsPaper, refreshList } from '../actions'
import { connect } from 'react-redux';
import DataManager from '../DataManager';

class NewsPaperListFavoriteCard extends Component {
    constructor(props) {
        super(props);
    }


    changeState(id) {

        if (DataManager.getInstance().isFavorite(id) === false) {
            DataManager.getInstance().addToFavorites(id)
        }
        else DataManager.getInstance().removeFromFavorites(id)
        this.props.refreshList()
    }

    changePic(id) {

        if (DataManager.getInstance().isFavorite(id) === false) {
            return require('../../resources/Heart_white.png');
        }
        return require('../../resources/Heart_active.png');
    }


    render() {
        const { id, name, imgUrl, rssUrl } = this.props.item.item
            if(DataManager.getInstance().isFavorite(id) === true){
        return (
            
               
                  <View style={{ flexDirection: 'row', }}>
                        <Card cardStyle={{ height: 100, width: 160 }}>
                            <TouchableOpacity onPress={() => Actions.NewsList({ item: [rssUrl, imgUrl] })}>
                                <View style={{ height: 60, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={{ height: 50, width: 150 }} source={{ uri: imgUrl }} />
                                    <TouchableOpacity style={{ height: 30, width: 30, position: 'absolute', right: -8, top: 7 }} onPress={() => this.changeState(id)}>
                                        <Image style={{ height: 15, width: 15, tintColor: 'gray' }} source={this.changePic(id)} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, height: 40, width: 160, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d21f3c' }} >
                                    <Text style={{color:'#ffffff'}}>{name}</Text>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    </View>
        )
            }
           return <View/>
    }
}

const styles = {
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 160,


    },
    textStyle1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    textStyle2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FEDC32',
    }
};

const mapStateToProps = ({ newsPaperListResult }) => {

    const { countChange, loading, newsPaper } = newsPaperListResult
    return { countChange, loading, newsPaper }
};
export default connect(mapStateToProps, { changePosition, getNewsPaper, refreshList })(NewsPaperListFavoriteCard);