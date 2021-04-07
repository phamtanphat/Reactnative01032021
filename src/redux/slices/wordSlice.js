/* eslint-disable no-shadow */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const defaultWords = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
  {id: 5, en: 'Five', vn: 'Năm', isMemorized: true},
];

export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  async (param, thunkAPI) => {
    console.log("Có")
    console.log(JSON.stringify(thunkAPI));
    return 'hihi';
  },
);

const word = createSlice({
  name: 'words',
  initialState: defaultWords,
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
    [fetchWords.pending]: (state, action) => {
      console.log('Penđing');
      return state;
    },
    [fetchWords.fulfilled]: (state, action) => {
      console.log(action.payload);
      return state;
    },
  },
});

const {reducer, actions} = word;
export const {toggleWord, addWord, removeWord} = actions;
export default reducer;
