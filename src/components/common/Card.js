import React from 'react';
import { View, Platform } from 'react-native';

const Card = ({ children, cardStyle }) => {
	const { defaultStyle } = styles;
	return (
		<View style={[defaultStyle, cardStyle]}>
			{children}
		</View>
	);
};

const styles = {
	defaultStyle: {
		elevation: 5,
		borderRadius: 5,
		backgroundColor: 'white',
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 1 },
		shadowColor: 'black',
		shadowOpacity: 0.2,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		...Platform.select({
			android: {
				marginBottom: 10,
			},
		}),

	},
	defaultIndicatorStyle: {
		width: 3,
		height: '100%'
	}
};

export default Card;
