/* eslint-disable no-shadow */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  async (param, thunkAPI) => {
    try {
      const url = 'https://servernode01032021.herokuapp.com/word';
      const response = await axios.get(url);
      return response.data.words;
    } catch (error) {
      console.log(error);
    }
  },
);

const word = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    toggleWord: (state, action) => {
      const index = state.findIndex((word) => word.id === action.payload.id);
      if (index !== -1) {
        state[index].isMemorized = !state[index].isMemorized;
      }
    },
    addWord: (state, action) => {
      state.push(action.payload);
    },
    removeWord: (state, action) => {
      const index = state.findIndex((word) => word.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
  extraReducers: {
    [fetchWords.fulfilled]: (state, action) => state.concat(action.payload),
  },
});

const {reducer, actions} = word;
export const {toggleWord, addWord, removeWord} = actions;
export default reducer;
