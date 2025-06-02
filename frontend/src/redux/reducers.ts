// new-vite-frontend/src/redux/reducer.ts

import { AnyAction } from 'redux'; // <-- IMPORT AnyAction from 'redux'
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  CountriesState,
  Country, // <-- IMPORT Country as we'll assert it
} from './types';

// Define the initial state with its type
const initialState: CountriesState = {
  countries: [],
  loading: false,
  error: null,
};

// The reducer function with explicit types for state and action
const countryReducer = (
  state: CountriesState = initialState,
  action: AnyAction // <-- CHANGE THIS TO AnyAction (This is the key to solving the error)
): CountriesState => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COUNTRIES_SUCCESS:
      // When action.type is FETCH_COUNTRIES_SUCCESS, we know action.payload is Country[]
      // We use a type assertion `as Country[]` to tell TypeScript this.
      return {
        ...state,
        loading: false,
        countries: action.payload as Country[], // <-- Type assertion
        error: null,
      };
    case FETCH_COUNTRIES_FAILURE:
      // When action.type is FETCH_COUNTRIES_FAILURE, we know action.payload is string
      // We use a type assertion `as string` to tell TypeScript this.
      return {
        ...state,
        loading: false,
        countries: [],
        error: action.payload as string, // <-- Type assertion
      };
    default:
      return state;
  }
};

export default countryReducer;