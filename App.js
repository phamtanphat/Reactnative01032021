/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import MainScreen from './src/screens/MainScreen';
import { SafeAreaView , Platform } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const defaultWords = [
  { id: 1, en: 'One', vn: 'Một', isMemorized: true },
  { id: 2, en: 'Two', vn: 'Hai', isMemorized: true },
  { id: 3, en: 'Three', vn: 'Ba', isMemorized: false },
  { id: 4, en: 'Four', vn: 'Bốn', isMemorized: false },
  { id: 5, en: 'Five', vn: 'Năm', isMemorized: true },
];

function wordsReducer(state = defaultWords , action){
  if (action.type === 'ADD_WORD') {
    const newWord = action.newWord;
    const newWords = state.map(word => ({ ...word }));
    newWords.push(newWord);
    return newWords;
  }
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.map(item => {
      if (item.id === action.word.id) {
        return { ...item, isMemorized: !item.isMemorized };
      }
      return item;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.filter(item => {
      if (item.id === action.word.id) {
        return false;
      }
      return true;
    });
    return newWords;
  }
  return state;
}

function shouldShowFormReducer(state = false , action){
  if (action.type === 'TOGGLE_FORM') {
    return !state;
  }
  return state;
}

function filterModeReducer(state = 'Show_All', action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.filterMode;
  }
  return state;
}

const rootReducer = combineReducers({
  words : wordsReducer,
  shouldShowForm : shouldShowFormReducer,
  filterMode : filterModeReducer,
});
const store = createStore(rootReducer);

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







// return state;
