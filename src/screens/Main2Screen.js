/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import Box from '../components/Box';

const Main2Screen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{flex: 1}}>
      <Box count={count} />
    </View>
  );
};

export default Main2Screen;
