// new-vite-frontend/src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './reducers'; // Import the TypeScript reducer

const store = configureStore({
  reducer: {
    countries: countryReducer,
    // Add other reducers here if you have them, e.g.:
    // otherSlice: otherReducer,
  },
  // You can add middleware, devTools, etc. here if needed.
  // devTools: process.env.NODE_ENV !== 'production', // Example for Redux DevTools extension
});

// Infer the `RootState` type from the store's `getState` method
export type RootState = ReturnType<typeof store.getState>;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;

export default store;