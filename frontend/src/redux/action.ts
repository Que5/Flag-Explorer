// new-vite-frontend/src/redux/action.ts

import axios from 'axios';
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  Country,
  CountryActionTypes,
} from './types'; // Import types from your types.ts file

// Import AppDispatch from the store file now that it's inferred there
import { AppDispatch } from './store'; // <-- NEW IMPORT

// Action creators with explicit return types
export const fetchCountriesRequest = (): CountryActionTypes => ({
  type: FETCH_COUNTRIES_REQUEST,
});

export const fetchCountriesSuccess = (countries: Country[]): CountryActionTypes => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const fetchCountriesFailure = (error: string): CountryActionTypes => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error,
});

// Async action using redux-thunk (implicitly handled by Redux Toolkit)
// The dispatch parameter is typed using AppDispatch inferred from the store.
export const fetchCountries = () => async (dispatch: AppDispatch) => {
  dispatch(fetchCountriesRequest());
  try {
    // Specify the expected response data type for axios
    const response = await axios.get<Country[]>('https://restcountries.com/v2/all');
    dispatch(fetchCountriesSuccess(response.data));
  } catch (err: any) { // Catch as 'any' for now, or refine error type
    const message = (err instanceof Error) ? err.message : 'An unknown error occurred';
    dispatch(fetchCountriesFailure(message));
  }
};