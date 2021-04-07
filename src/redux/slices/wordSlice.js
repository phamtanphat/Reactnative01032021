/* eslint-disable no-shadow */
import {createSlice} from '@reduxjs/toolkit';

const defaultWords = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
  {id: 5, en: 'Five', vn: 'Năm', isMemorized: true},
];

const word = createSlice({
  name: 'words',
  initialState: defaultWords,
  reducers: {
    toggleWord: (state, action) => {
      console.log(action.payload);
      const index = state.findIndex((word) => word.id === action.payload.id);
      state[index].isMemorized = !state[index].isMemorized;
      return state;
    },
  },
});

const {reducer, actions} = word;
export const {toggleWord} = actions;
export default reducer;
