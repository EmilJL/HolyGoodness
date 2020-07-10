import React from 'react';
import {
	StyleSheet,
	Dimensions,
} from 'react-native';

var {height, width} = Dimensions.get('screen');
const style = StyleSheet.create({
	

	/**
	Log in
	*/
	welcomeBody: {
		height: height,
		width: '100%',
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 40,
		paddingBottom: 20,
		backgroundColor: 'black'
	},
	
	loginContainer: {
		flex: 1,
		backgroundColor: '#DDDFDE',
		marginBottom: 30,
	},
	
	welcomeImage: {
		width: '100%',
		height: width/1.63,
		top: -5,
		alignSelf: 'center',
	},

	welcomeImageContainer: {
		padding: 0,
	},

	welcomeMessageContainer: {
		width: width-20,
		height: height*0.2,
		alignSelf: 'center',
		color: 'red',
		opacity: 0.8,
		fontSize: 50,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingTop: 25,
	},

	loginBoxTitle: {
		fontSize:30,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingTop: 12.5,
		paddingBottom: 12.5,
		color: 'blue',
		opacity: 0.9,
	},

	welcomeTextInput: {
		backgroundColor: 'white',
		marginTop: 12.5,
		height: 40,
		width: width-55,
		alignSelf: 'center',
		paddingLeft: 12.5,
	},

	welcomeLoginButton: {
		color: 'white',
		backgroundColor: 'blue',
		height: 40,
		width: width*0.25,
		alignSelf: 'center',
		borderRadius: 10,
		marginTop: 30,
		fontSize: 20,
		fontWeight: 'bold',
		paddingTop: 5,
		textAlign: 'center',
	},

	/**
	Hovedskærmen
	*/
	mainContainer: {
		width: width,
		height: height,
	},

	greetingText: {
		fontSize: 35,
		textAlign: 'center',
	},

	greetingContainer: {
		marginTop: '10%'

	},

	contentContainer: {
		flex: 1,
	},

	dailyStatusContainer: {
		borderColor: 'red',
		borderWidth: 2,
		borderRadius: 10,
		width: '70%',
		height: '65%',
		alignSelf: 'center',
		marginTop: '10%'
	}


})

export default style;