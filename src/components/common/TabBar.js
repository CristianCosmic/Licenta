import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { checkLogin, facebookLogin } from '../../actions';
import DataManager from '../../DataManager';
import Admob from './Admob';


class TabBar extends Component {
    componentWillMount() {
        this.user = DataManager.getInstance().getUser();
    };

    render() {
        const { name, image } = this.user
        const { tabBarStyle, tabBarMainView, buttonStyle, buttonImageStyle, buttonViewStyle } = styles

        return (
                           
            <View style={tabBarStyle}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => Actions.NewsList()}
                    style={buttonStyle}
                >
                    <View style={buttonViewStyle}>
                        <Image source={require('../../../resources/newsicon.png')} style={buttonImageStyle} />
                        <Text>Read News</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => Actions.Profile()}
                    style={buttonStyle}
                >
                    <View style={buttonViewStyle}>
                        <Image style={buttonImageStyle} source={{ uri: image }} />
                        <Text>My Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        );
    }
};

const styles = {
    tabBarStyle: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    buttonStyle: {
        height: 50,
        justifyContent: 'center',
    },
    buttonImageStyle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2
    },
    buttonViewStyle: {
        flexDirection: 'column',
        alignItems: 'center'
    }
};

const mapStateToProps = ({ auth }) => {
    const { user, image, name } = auth;
    return { user, image, name };
};
export default connect(mapStateToProps, { checkLogin, facebookLogin })(TabBar);
