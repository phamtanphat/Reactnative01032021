import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';

const StackAuthen = createStackNavigator();

const StackContainerAuthen = () => {
  return (
    <StackAuthen.Navigator>
      <StackAuthen.Screen name="Login" component={Login} />
    </StackAuthen.Navigator>
  );
};

export default StackContainerAuthen;
