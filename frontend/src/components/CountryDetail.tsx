// new-vite-frontend/src/components/CountryDetail.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Import necessary types from your Redux setup
import { RootState, AppDispatch } from '../redux/store'; // For the overall store state and dispatch
import { Country } from '../redux/types'; // For the individual Country interface

// Import your action creator
import { fetchCountries } from '../redux/action'; // Ensure the .ts extension is implicit or explicit

const CountryDetail = () => {
  // Type the useParams hook to expect a 'name' property which is a string
  const { name } = useParams<{ name: string }>();

  // Explicitly type the dispatch hook
  const dispatch: AppDispatch = useDispatch();

  // Explicitly type the useSelector hook with RootState for full type safety
  // Then destructure the 'countries' slice from the RootState
  const { countries, loading, error } = useSelector(
    (state: RootState) => state.countries
  );

  useEffect(() => {
    // Only dispatch if 'name' is available from the URL params
    if (name) {
      // Your current fetchCountries action fetches *all* countries.
      // If your API supports fetching a single country by name, you'd modify
      // fetchCountries or create a new action (e.g., fetchCountryByName).
      // For now, we fetch all, and then filter locally.
      dispatch(fetchCountries());
    }
  }, [dispatch, name]); // Include 'name' in dependencies as useEffect depends on it

  // Render loading and error states first
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Find the specific country based on the URL parameter 'name'
  // Use .find() to get the first matching country
  const country = countries.find(c => c.name === name);

  // If no country is found after loading, display a message
  if (!country) return <div>No country found or data not loaded. Please return to the main list.</div>;

  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`${country.name} flag`} width="200" />
      {/* Access population, using optional chaining and nullish coalescing for safety */}
      <p>Population: {country.population?.toLocaleString() || 'N/A'}</p>
      {/* Access capital, handling array or string types, with a fallback */}
      <p>Capital: {Array.isArray(country.capital) ? country.capital.join(', ') : country.capital || 'N/A'}</p>
    </div>
  );
};

export default CountryDetail;