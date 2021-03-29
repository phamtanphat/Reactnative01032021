/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import MainScreen from './src/screens/MainScreen';
import Box from './src/components/Box';
import { SafeAreaView , Platform } from 'react-native';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { act } from 'react-test-renderer';

const defaultStore = {
  words: [
    { id: 1, en: 'One', vn: 'Một', isMemorized: true },
    { id: 2, en: 'Two', vn: 'Hai', isMemorized: true },
    { id: 3, en: 'Three', vn: 'Ba', isMemorized: false },
    { id: 4, en: 'Four', vn: 'Bốn', isMemorized: false },
    { id: 5, en: 'Five', vn: 'Năm', isMemorized: true },
  ],
  shouldShowForm: false,
  filterMode: 'Show_All',
};

const store = createStore((state = defaultStore , action) => {
  if (action.type === 'TOGGLE_FORM'){
    return {...state , shouldShowForm : !state.shouldShowForm};
  }
  if (action.type === 'ADD_WORD'){
    const newWord = action.newWord;
    const newWords = state.words.map(word => ({ ...word }));
    newWords.push(newWord);
    return {...state , words : newWords};
  }
  if (action.type === 'SET_FILTER_MODE'){
    return {...state , filterMode : action.filterMode};
  }
  if (action.type === 'TOGGLE_WORD'){
    const newWords = state.words.map(item => {
      if (item.id === action.word.id) {
        return { ...item, isMemorized: !item.isMemorized };
      }
      return item;
    });
    return {...state , words : newWords};
  }
  if (action.type === 'REMOVE_WORD'){
    const newWords = state.words.filter(item => {
      if (item.id === action.word.id) {
        return false;
      }
      return true;
    });
    return { ...state, words: newWords };
  }
  return state;
});

// không dùng connect cho App vì khi thay đổi store nếu ảnh hưởng app
// tất cả component sẽ bị re-render


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1 , marginTop : Platform.OS === 'android' ? 10 : 0}}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    );
  }
}
