import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

export default class Word extends Component {
  render() {
    const {data} = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item, index}) => {
          return <Text>{item.en}</Text>;
        }}
      />
    );
  }
}
