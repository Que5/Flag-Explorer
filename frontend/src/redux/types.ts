// new-vite-frontend/src/redux/types.ts

import { PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a single Country object
// These properties should match what your API returns.
export interface Country {
  name: string;
  flag: string;
  population: number; // RestCountries typically returns this as a number
  capital: string[] | string | null; // Can be an array (for multiple capitals), a single string, or null
  // Add any other properties your country objects have based on your API response
  // e.g., region: string;
  // e.g., currencies: Array<{ code: string; name: string; symbol: string }>;
  // e.g., languages: Array<{ iso639_1: string; iso639_2: string; name: string; nativeName: string }>;
}

// Define the shape of your Redux state slice for countries
export interface CountriesState {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

// Define action types as constants
export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';

// Define the union type for all possible Country-related actions
export type CountryActionTypes =
  | { type: typeof FETCH_COUNTRIES_REQUEST } // Action without payload (e.g., for request)
  | PayloadAction<Country[], typeof FETCH_COUNTRIES_SUCCESS> // Success action with an array of Country objects as payload
  | PayloadAction<string, typeof FETCH_COUNTRIES_FAILURE>; // Failure action with a string (error message) as payload