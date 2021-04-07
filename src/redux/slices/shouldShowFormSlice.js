/* eslint-disable no-shadow */
import {createSlice} from '@reduxjs/toolkit';

const shouldShowForm = createSlice({
  name: 'shouldShowForm',
  initialState: true,
});

const {reducer, actions} = shouldShowForm;
export default reducer;
