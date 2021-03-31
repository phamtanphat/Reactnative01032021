import {combineReducers} from 'redux';
import wordsReducer from './wordsReducer';
import shouldShowFormReducer from './shouldShowFormReducer';
import filterModeReducer from './filterModeReducer';

const reducer = combineReducers({
  words: wordsReducer,
  shouldShowForm: shouldShowFormReducer,
  filterMode: filterModeReducer,
});

export default reducer;
