/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Child from './Child';

const Box = (props) => {
  const [count, setCount] = useState(0);
  const onInCrease = () => {
    setCount(count + 1);
  };
  const onDeCrease = () => {
    setCount(count - 1);
  };
  const onReset = () => {
    setCount(0);
  };

  // component did mount
  // useEffect(() => {
  //   console.log('use Effect component did mount');
  // }, []);

  // // component did update
  // useEffect(() => {
  //   console.log('use Effect component did update');
  // }, [count]);

  // xử lý cho listener
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      console.log('interval');
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <Text
        style={{
          alignSelf: 'center',
          color: 'red',
          fontSize: 20,
          marginBottom: 10,
        }}>
        Count = {count}
      </Text>
      <Child
        onInCrease={onInCrease}
        onDeCrease={onDeCrease}
        onReset={onReset}
      />
    </View>
  );
};

export default Box;
