import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form/slice';
import trackReducer from './tracks/slice'

const store = configureStore({
  reducer: {
    form: formReducer,
    track: trackReducer
  },
});

export default store;

