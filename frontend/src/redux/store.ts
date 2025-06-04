import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './reducers';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
