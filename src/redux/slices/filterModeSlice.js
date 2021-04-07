/* eslint-disable no-shadow */
import {createSlice} from '@reduxjs/toolkit';

const filterMode = createSlice({
  name: 'filterMode',
  initialState: 'Show_All',
});

const {reducer, actions} = filterMode;
export default reducer;
