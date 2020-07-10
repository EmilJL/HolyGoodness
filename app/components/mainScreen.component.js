import React from 'react';
import style from '../styles/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome5';
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

class MainScreen extends React.Component {
	componentDidMount(){
		
	}
	render (){
		const {user}= this.props.route.params;
		console.log(user);
		return (
			<SafeAreaView style={{height: '100%'}}>
				<StatusBar barStyle="dark-content" />
			    <ScrollView contentInsetAdjustmentBehavior="automatic">
			        <View style={style.mainContainer}>

			        	<View style={style.greetingContainer}>
				        	<Text style={style.greetingText}>
				        		Whattup, {user.name}?
				        	</Text>
			        	</View>

			        	<View style={style.contentContainer}>
			        		<View style={style.dailyStatusContainer}>
			        		</View>
			        		<TouchableOpacity>
			        			<View>
			        				<Icon name={'plus'} color={'blue'} size={20}/>

			        			</View>
			        		</TouchableOpacity>
			        	</View>

			        </View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
export default MainScreen;