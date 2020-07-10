/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Welcome from './components/welcome.component.js';
import MainScreen from './components/mainScreen.component.js';
import CustomHeader from './components/header.component.js';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialScreen={Welcome} 
        options={{headerMode: 'none'}}
      >
        <Stack.Screen 
          options={{
            header: () => null,
            headerStyle: {borderBottomWidth: 0}
          }} 
          name="Welcome" 
          component={Welcome} 
        />
        <Stack.Screen 
          options={{
            header: () => <CustomHeader/>
          }} 
          name="MainScreen" 
          component={MainScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
