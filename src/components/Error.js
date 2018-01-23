import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


/*const Error = ({ errorMsg }) => {
	const { viewStyle, textStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>Error has occured: {errorMsg}</Text>
		</View>
	);
};*/

const Error = ({ errorMsg }) => {

	if (errorMsg) {
		Alert.alert(
			'Error has occured:', errorMsg,
			[
				{ text: 'Close' }
			]
		);
		return null;
	} else {
		return <View />;
	}

};


const styles = {
	viewStyle: {
		justifyContent: 'center',
		alignSelf: 'center',
		flex: 1
	},
	textStyle: {
		color: 'red',
		fontSize: 15,
		fontWeight: 'bold'
	}
};
export { Error };
