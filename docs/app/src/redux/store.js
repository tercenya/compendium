import React from 'react';
import { createStore } from 'redux';
const SET_LANGUAGE = 'SET_LANGUAGE';

const compendiumStore = (state = {lang: 'ruby'}, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return Object.assign({}, state, {
        lang: action.lang
      })
    default:
      return state
  };
};

const store = createStore(compendiumStore);

export default store;
