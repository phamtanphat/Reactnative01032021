/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Component</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          padding: 5,
          borderRadius: 5,
          backgroundColor: 'yellow',
          marginTop: 30,
        }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
