import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import ItemWord from './ItemWord';

export default class Word extends Component {
  render() {
    const {data} = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item, index}) => <ItemWord en={item.en} />}
      />
    );
  }
}
