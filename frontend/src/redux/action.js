import axios from 'axios';

export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';

export const fetchCountries = (name = '') => async (dispatch) => {
dispatch({ type: FETCH_COUNTRIES_REQUEST });
try {
    const url = name 
    ? `http://localhost:8000/api/countries/?name=${name}`
    : `http://localhost:8000/api/countries/`;
    const response = await axios.get(url);
    dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: response.data });
} catch (error) {
    dispatch({ type: FETCH_COUNTRIES_FAILURE, payload: error.message });
}
};