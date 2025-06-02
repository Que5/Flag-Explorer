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
  action: AnyAction 
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
        countries: action.payload as Country[], 
        error: null,
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        error: action.payload as string, 
      };
    default:
      return state;
  }
};

export default countryReducer;
