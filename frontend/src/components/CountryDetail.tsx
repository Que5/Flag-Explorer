import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState, AppDispatch } from '../redux/store'; 

import { fetchCountries } from '../redux/action'; 

const CountryDetail = () => {
  const { name } = useParams<{ name: string }>();

  const dispatch: AppDispatch = useDispatch();

  const { countries, loading, error } = useSelector(
    (state: RootState) => state.countries
  );

  useEffect(() => {
    if (name) {
      dispatch(fetchCountries());
    }
  }, [dispatch, name]); 

  // Render loading and error states first
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const country = countries.find(c => c.name === name);

  if (!country) return <div>No country found or data not loaded. Please return to the main list.</div>;

  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`${country.name} flag`} width="200" />
      <p>Population: {country.population?.toLocaleString() || 'N/A'}</p>
      <p>Capital: {Array.isArray(country.capital) ? country.capital.join(', ') : country.capital || 'N/A'}</p>
    </div>
  );
};

export default CountryDetail;
