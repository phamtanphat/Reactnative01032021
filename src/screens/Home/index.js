import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Detail from './Detail';

const StackHome = createStackNavigator();

const StackContainerHome = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen name="Home" component={Home} />
      <StackHome.Screen name="Detail" component={Detail} />
    </StackHome.Navigator>
  );
};

export default StackContainerHome;
