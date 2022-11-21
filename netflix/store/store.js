import React from 'react';


import { configureStore } from '@reduxjs/toolkit';
import count_reducer from './reducers/countReducer';
import { Movies } from './reducers/movieAddReducer';
import logger from 'redux-logger';
const reducer = { count:count_reducer,movie:Movies };



export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

