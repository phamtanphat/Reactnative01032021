/* eslint-disable no-labels */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { Component , useState , useMemo} from 'react';
import {Text} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { SafeAreaView , Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Main2Screen from './src/screens/Main2Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Authentication/Login';
import Detail from './src/screens/Home/Detail';
import Home from './src/screens/Home/Home';
import StackContainerHome from './src/screens/Home';
import StackContainerAuthen from './src/screens/Authentication';
import Authentication from './src/helpers/handleLogin';



const App = (props) => {
    const [token, setToken] = useState(null);

  const authContext = React.useMemo(
    () => ({
      signIn: () => setToken('abc'),
      signOut: () => setToken(null)}),
    []
  );

    return (
      <Authentication.Provider value={authContext}>
        <NavigationContainer>
          {token != null
            ?
            <StackContainerHome />
            :
            <StackContainerAuthen />
          }
        </NavigationContainer>
      </Authentication.Provider>

    );
};


export default App;







// return state;
