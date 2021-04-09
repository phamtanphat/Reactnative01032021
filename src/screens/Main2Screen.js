/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Main2Screen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center', fontSize: 30, marginBottom: 10}}>
        Count : {count}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
          <Text>InCrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCount(count - 1)}
          style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
          <Text>DeCrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCount(0)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 5,
          }}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main2Screen;
