/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AuthContext from '../../helpers/handleLogin';

const Login = () => {
  const {signIn} = React.useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Component</Text>
      <TouchableOpacity
        onPress={() => signIn()}
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
