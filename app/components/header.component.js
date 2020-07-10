import React from 'react';
import style from '../styles/headerStyles.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

class Header extends React.Component {
	componentDidMount(){
		
	}
	render (){
		
		return (
			<SafeAreaView style={style.headerContainer}>
				<Text style={style.headerTitle}>
					Wholly Goodness
				</Text>
			</SafeAreaView>
		);
	}
}
export default Header;