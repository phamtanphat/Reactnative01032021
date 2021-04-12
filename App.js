/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {Text} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { SafeAreaView , Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Main2Screen from './src/screens/Main2Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Detail from './src/screens/Detail';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App = (props) => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail}/>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};


export default App;







// return state;
