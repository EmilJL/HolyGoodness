import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../components/welcome.component.js';

const MainNavigator = createStackNavigator(
{
	Welcome: {
		screen: Welcome,
		navigationOptions: {
			header: null
		}
	}
},
{
	initialRouteName: Welcome
});


export default MainNavigator;