import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView, FlatList, TextInput } from 'react-native';
import Card from './common/Card';
import Loading from './common/Loading';
import CardSection from './common/CardSection';
import { Actions } from 'react-native-router-flux'
import { changePosition, getNewsPaper,filterChanged } from '../actions'
import { connect } from 'react-redux';
import DataManager from '../DataManager';
import NewsPaperListCard from './NewsPaperListCard'
import NewsPaperListFavoriteCard from './NewsPaperListFavoriteCard'

class NewsPaperList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

        this.props.getNewsPaper()

    }

     onChangeText = (text) => {
       
        this
            .props
            .filterChanged(text);
    }

   

    render() {
       
        const { textStyle1, textStyle2, viewStyle } = styles;
        if (this.props.loading) {
            return <Loading />
        }
       console.log('FilteredNews',this.props.filteredNews)
        return (
            <View style={{}}>
                <Card cardStyle={{ width: '100%', height: 90, alignSelf: 'center', marginTop: 0 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 30, }}>NEWSPAPER</Text>
                          <TextInput
                    style={styles.search}
                    onChangeText={this.onChangeText}
                  
                    autoCapitalize={'words'}
                    autoCorrect={false}
                    placeholder='Search' />
                    </View>
                </Card>
                  <ScrollView>
                     {DataManager.getInstance().hasFavorites() === true ? <View>
                         
                     <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' ,marginLeft:10 }}>
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>Favorites</Text>
                    <Image style={{ height: 15, width: 15, tintColor: 'gray', alignSelf: 'center', marginLeft: 7 , top:2 }} source={require('../../resources/Heart_active.png')} />
                </View>
                   </View> 
                 
                <FlatList
                style={{marginLeft:8, height:120}}
                    horizontal={true}
                    data={this.props.newsPaper}
                    renderItem={(item) =>
                        <NewsPaperListFavoriteCard item={item} />
                    }
                    keyExtractor={(item, index) => item.id}

                />
                <View style={{height:1, width:'90%', backgroundColor:'gray', alignSelf:'center'}}/>
                </View> : <View/>}
                <FlatList
                    style={{ marginBottom: 95, alignSelf: 'center' }}
                    horizontal={false}
                    numColumns={2}
                    data={this.props.filteredNews.filter(el => !DataManager.getInstance().isFavorite(el.id))}
                    renderItem={(item) =>
                        <NewsPaperListCard item={item} />
                    }
                    keyExtractor={(item, index) => item.id}

                />
                </ScrollView>
            </View>
        )
    }
};

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
    },
    search: {
        width: '80%',
        fontSize: 15,
        paddingLeft: 30,
        borderColor: '#E4E4E4',
        borderWidth: 5
    },
};

const mapStateToProps = ({ newsPaperListResult }) => {
    const { countChange, loading, newsPaper, filteredNews , filter } = newsPaperListResult
    return { countChange, loading, newsPaper ,filteredNews ,filter}
};
export default connect(mapStateToProps, { changePosition, getNewsPaper,filterChanged })(NewsPaperList);