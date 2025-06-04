import { PayloadAction } from '@reduxjs/toolkit';


export interface Country {
  name: string;
  flag: string;
  population: number; 
  capital: string[] | string | null; 
}


export interface CountriesState {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

// Define action types as constants
export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';

export type CountryActionTypes =
  | { type: typeof FETCH_COUNTRIES_REQUEST } 
  | PayloadAction<Country[], typeof FETCH_COUNTRIES_SUCCESS> 
  | PayloadAction<string, typeof FETCH_COUNTRIES_FAILURE>; 
