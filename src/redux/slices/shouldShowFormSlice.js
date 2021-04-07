/* eslint-disable no-shadow */
import {createSlice} from '@reduxjs/toolkit';

const shouldShowForm = createSlice({
  name: 'shouldShowForm',
  initialState: false,
  reducers: {
    toggleForm: (state, action) => !state,
  },
});

const {reducer, actions} = shouldShowForm;
export const {toggleForm} = actions;
export default reducer;
