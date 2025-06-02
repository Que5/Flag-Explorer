import axios from 'axios';
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  Country,
  CountryActionTypes,
} from './types'; 

import { AppDispatch } from './store'; 

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

// The dispatch parameter is typed using AppDispatch inferred from the store.
export const fetchCountries = () => async (dispatch: AppDispatch) => {
  dispatch(fetchCountriesRequest());
  try {
    
    const response = await axios.get<Country[]>('https://restcountries.com/v2/all');
    dispatch(fetchCountriesSuccess(response.data));
  } catch (err: any) {
    const message = (err instanceof Error) ? err.message : 'An unknown error occurred';
    dispatch(fetchCountriesFailure(message));
  }
};
