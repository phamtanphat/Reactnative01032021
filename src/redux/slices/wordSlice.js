/* eslint-disable no-shadow */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWords = createAsyncThunk('words/fetchWords', async () => {
  try {
    const url = 'https://servernode01032021.herokuapp.com/word';
    const response = await axios.get(url);
    return response.data.words;
  } catch (error) {
    console.log(error);
  }
});

export const fetchToggleWord = createAsyncThunk(
  'words/fetchToggleWord',
  async (params) => {
    try {
      const {_id, isMemorized} = params;
      const url = `https://servernode01032021.herokuapp.com/word/${_id}`;
      const response = await axios.put(url, {isMemorized});
      return response.data.word;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchRemoveWord = createAsyncThunk(
  'words/fetchRemoveWord',
  async (params) => {
    try {
      const {_id} = params;
      const url = `https://servernode01032021.herokuapp.com/word/${_id}`;
      const response = await axios.delete(url);
      return response.data.word;
    } catch (error) {
      console.log(error);
    }
  },
);

const word = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    addWord: (state, action) => {
      state.push(action.payload);
    },
    removeWord: (state, action) => {},
  },
  extraReducers: {
    [fetchWords.fulfilled]: (state, action) => state.concat(action.payload),
    [fetchToggleWord.fulfilled]: (state, action) => {
      const index = state.findIndex((word) => word._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    [fetchRemoveWord.fulfilled]: (state, action) => {
      const index = state.findIndex((word) => word._id === action.payload._id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

const {reducer, actions} = word;
export const {toggleWord, addWord, removeWord} = actions;
export default reducer;
