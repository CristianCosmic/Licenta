import React from 'react';
import { View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';

const Loading = () => {
	const { loadingStyle } = styles;
	return (
		<View style={loadingStyle}>
			<BallIndicator color={'black'} />
		</View>
	);
};

const styles = {
	loadingStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
};
export { Loading };
