import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import ItemWord from './ItemWord';
import PropTypes from 'prop-types';

export default class Word extends Component {
  static propTypes = {
    data: PropTypes.array,
    onToggleWord: PropTypes.func,
    onRemoveWord: PropTypes.func,
    filterMode: PropTypes.string,
  };

  static defaultProps = {
    data: [],
    filterMode: false,
  };
  render() {
    const { data, onToggleWord, onRemoveWord} = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => item._id.toString()}
        renderItem={({item, index}) => (
          <ItemWord
            word={item}
            filterMode={this.props.filterMode}
            onToggleWord={onToggleWord}
            onRemoveWord={onRemoveWord}
          />
        )}
      />
    );
  }
}
