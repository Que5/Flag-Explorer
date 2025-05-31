import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/action';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
const { name } = useParams();
const dispatch = useDispatch();
const { countries, loading, error } = useSelector((state) => state.countries);

useEffect(() => {
    dispatch(fetchCountries(name));
}, [dispatch, name]);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;

const country = countries[0];
if (!country) return <div>No country found</div>;

return (
    <div>
    <h2>{country.name}</h2>
    <img src={country.flag} alt={`${country.name} flag`} width="200" />
    <p>Population: {country.population.toLocaleString()}</p>
    <p>Capital: {country.capital || 'N/A'}</p>
    </div>
);
};

export default CountryDetail;