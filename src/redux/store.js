import {configureStore} from '@reduxjs/toolkit';
import wordsReducer from './slices/wordSlice';
import shouldShowFormReducer from './slices/shouldShowFormSlice';
import filterModeReducer from './slices/filterModeSlice';

const store = configureStore({
  reducer: {
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer,
  },
});

export default store;
