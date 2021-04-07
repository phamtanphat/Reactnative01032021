/* eslint-disable no-shadow */
import {createSlice} from '@reduxjs/toolkit';

const filterMode = createSlice({
  name: 'filterMode',
  initialState: 'Show_All',
  reducers: {
    setFilterMode: (state, action) => action.payload,
  },
});

const {reducer, actions} = filterMode;
export const {setFilterMode} = actions;
export default reducer;
