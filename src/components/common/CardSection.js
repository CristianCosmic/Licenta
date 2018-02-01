import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children, cardSectionStyle }) => {
	const { defaultStyle } = styles;
	return <View style={[defaultStyle, cardSectionStyle]}>{children}</View>;
};
const styles = {
	defaultStyle: {
		padding: 5,
		justifyContent: 'flex-start',
		flexDirection: 'column',
		position: 'relative'
	}
};

export default CardSection;
