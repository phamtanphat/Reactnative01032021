/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AuthContext from '../../helpers/handleLogin';

const Home = () => {
  const { signOut} = React.useContext(AuthContext);
  console.log(signOut)
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Component</Text>
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
  );
};

export default Home;
