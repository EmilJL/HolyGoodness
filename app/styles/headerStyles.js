import React from 'react';
import {
	StyleSheet,
	Dimensions,
} from 'react-native';

var {height, width} = Dimensions.get('screen');
const style = StyleSheet.create({

	headerContainer: {

		height: 50, 
		width: '100%', 
		backgroundColor: 'red', 
		flexDirection: 'row',
	},

	headerTitle: {
		color: 'white',
		fontSize: 20,
		alignSelf: 'center',
		flex: 3,
	}

})

export default style;