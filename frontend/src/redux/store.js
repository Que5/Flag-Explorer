import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './reducers';

export const store = configureStore({
reducer: {
    countries: countryReducer,
},
});