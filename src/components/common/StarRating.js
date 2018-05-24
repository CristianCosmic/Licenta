import React from 'react';
import { View, Image } from 'react-native';

const StarRating = ({ coloured }) => {
	const { backgroundViewStyle, starImage } = styles;
	const maxElems = 5;

	const array = new Array(maxElems).fill(undefined).map((val, idx) => idx);

	return (
		<View style={backgroundViewStyle}>
			{array.map(elem => {
				if (elem < coloured) {
					return (
						<Image style={starImage} key={elem}
							source={require('../../../resources/StarFull.png')}
						/>
					);
				}
				return (
					<Image style={starImage} key={elem}
						source={require('../../../resources/StarEmpty.png')}
					/>
				);
			})}
		</View>
	);
};

const styles = {
	backgroundViewStyle: {
		height: 35,
		marginTop: 10,
		paddingHorizontal: 2,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom:10
	},
	starImage: {
		height: 31,
		width: 33,
		marginRight: 23 / 2,
		marginTop: 10,
		marginLeft: 23 / 2,
		
	},
};

export default StarRating;
