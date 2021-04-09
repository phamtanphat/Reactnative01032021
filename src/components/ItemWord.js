/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import screenDimension from '../helpers/screenDimension';
import PropTypes from 'prop-types';

export default class ItemWord extends Component {
  static propTypes = {
    word: PropTypes.object,
    onToggleWord: PropTypes.func,
    onRemoveWord: PropTypes.func,
    filterMode: PropTypes.string,
  };

  static defaultProps = {
    data: {},
    filterMode: false,
  };
  renderItemWord = (word) => {
    const {filterMode, onToggleWord, onRemoveWord} = this.props;
    if (filterMode === 'Show_Forgot' && !word.isMemorized) {
      return null;
    } else if (filterMode === 'Show_Memorized' && word.isMemorized) {
      return null;
    }
    return (
      <View key={word._id}>
        <View style={styles.groupWord}>
          <View style={styles.groupHorizontal}>
            <Text style={styles.textEn}>{word.en}</Text>
            <Text style={styles.textVn}>
              {word.isMemorized ? '----' : word.vn}
            </Text>
          </View>
          <View style={styles.groupHorizontal}>
            <TouchableOpacity
              onPress={() => onToggleWord(word)}
              style={{
                ...styles.buttonMemorize,
                backgroundColor: word.isMemorized ? 'green' : 'red',
              }}>
              <Text style={styles.textMemorize}>
                {word.isMemorized ? 'Forgot' : 'Memorize'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onRemoveWord(word)}
              style={styles.buttonRemove}>
              <Text style={styles.textRemove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return this.renderItemWord(this.props.word);
  }
}

const styles = StyleSheet.create({
  groupWord: {
    height: 100,
    backgroundColor: 'gainsboro',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: '#000',
  },
  groupHorizontal: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textEn: {
    color: 'green',
    fontWeight: '500',
    fontSize: screenDimension.getWidth() / 22,
  },
  textVn: {
    color: 'red',
    fontWeight: '500',
    fontSize: screenDimension.getWidth() / 22,
  },
  buttonMemorize: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonRemove: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
  },
  textMemorize: {
    color: 'white',
    fontSize: screenDimension.getWidth() / 22,
  },
  textRemove: {
    color: 'darkblue',
    fontSize: screenDimension.getWidth() / 22,
  },
});
