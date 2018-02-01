import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { checkLogin, facebookLogin } from '../../actions';

const TabBar = () => {

    return (
        <View style={styles.tabBarStyle}>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 50,
                    backgroundColor: '#f9f9f9',
                    shadowColor: '#000',
                    shadowOpacity: 0.2
                }}
            />
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => Actions.NewsList()}
                style={{
                    height: 50,
                    justifyContent: 'center',
                }}
            >
                <View style={{
                    borderWidth: 1,
                    borderColor: '#000000',
                    borderRadius: 50
                }}>
                    <Image
                        source={require('../../../resources/newspaper.png')}
                        style={{
                            width: 45,
                            height: 45,

                        }}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => Actions.Profile()}
                style={{
                    height: 50,
                    justifyContent: 'center',
                }}
            >
                <View style={{
                    borderWidth: 1,
                    borderColor: '#000000',
                    borderRadius: 50
                }}>
                    <Image
                        source={require('../../../resources/newspaper.png')}

                        style={{
                            width: 45,
                            height: 45
                        }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        height: 90,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        flexDirection: 'row',
    }
};

const mapStateToProps = ({ auth }) => {
    const { user, image, name } = auth;
    return { user, image, name };
};
export default connect(mapStateToProps, { checkLogin, facebookLogin })(TabBar);
