import React from 'react';
import style from '../styles/styles.js';
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

const createUser =(userName, password, name, points) =>{
	var user= {};
	user.userName=userName;
	user.password=password;
	user.name=name;
	user.points=points;

	return user;
}


class Welcome extends React.Component {
	state={
		users: [],
		userName: '',
		password: '',
		logInTitle: 'Log lige ind :)',
	}
	componentDidMount(){
		var emil= createUser('Ynalot', '123', 'Emil', 0);
		var helene= createUser('Jumpegoej', '0802', 'Helene', 0);
		var test= createUser('1', '2', 'Test', 7);

		var users= [emil, helene, test];

		this.setState({users: users});
		this.props.navigation.navigate('MainScreen', {user: test, users: users});
	}

	logInAttempt= ()=> {
		if (this.state.userName != '' && this.state.password != '') {
			var didLogIn= false;

			this.state.users.map((user)=> {
				if (user.userName.toUpperCase()==this.state.userName.toUpperCase() && user.password== this.state.password) {
					didLogIn= true;
					this.props.navigation.navigate('MainScreen', {user: user, users: this.state.users});	
				}
			}) 

			if (!didLogIn) {
				this.setState({logInTitle: 'Prøv igen :('});
			}
		} 
	}

	render (){
		return (
			<View>
				<StatusBar barStyle="dark-content" />
			    <ScrollView
		          contentInsetAdjustmentBehavior="automatic">
			        <View style= {style.welcomeBody}>
						<View style= {style.welcomeImageContainer}>
							<Image
		          				style={style.welcomeImage}
		          				resizeMode= 'center'
		          				source={require('../assets/Caja.jpg')}
		        			/>
		        		</View>
		        		<Text style= {style.welcomeMessageContainer}>
		        			Do it for Her
		        		</Text>
						<View style= {style.loginContainer}>
							<Text style= {[style.loginBoxTitle, this.state.logInTitle=='Log lige ind :)' ? null : {color:'red'}]}>
								{this.state.logInTitle}
							</Text>
							<TextInput 
								placeholder= 'brugernavn' 
								style={style.welcomeTextInput} 
								placeholderTextColor= 'red' 
								onChangeText={text => this.setState({userName: text})}
     							value={this.state.userName}
     						/>

							<TextInput 
								placeholder= 'adgangskode' 
								style={style.welcomeTextInput} 
								placeholderTextColor= 'red'
								onChangeText={text => this.setState({password: text})}
	      						value={this.state.password}
	      						secureTextEntry={true}
							/>
							<TouchableOpacity onPress={()=>this.logInAttempt()}>	
								<Text style= {style.welcomeLoginButton}> 
									GO!
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
export default Welcome;