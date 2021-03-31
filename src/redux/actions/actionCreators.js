import actionTypes from './actionTypes';

export function toggleWord(word) {
  return {type: actionTypes.ACTION_TYPE_TOGGLE_WORD, word};
};
