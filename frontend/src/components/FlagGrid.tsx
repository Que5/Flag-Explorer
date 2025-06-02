// new-vite-frontend/src/components/FlagGrid.tsx

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { RootState, AppDispatch } from '../redux/store';

import { fetchCountries } from "../redux/action";

const FlagGrid = () => {
  const dispatch: AppDispatch = useDispatch();

  const { countries, loading, error } = useSelector(
    (state: RootState) => state.countries
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {countries.map((country) => (
        // <--- ADD THE COUNTRY NAME AS TEXT HERE!
        <Link to={`/country/${country.name}`} key={country.name} style={{ textAlign: 'center' }}>
          <img src={country.flag} alt={`${country.name} flag`} width="100" />
          {/* Add the country name as a simple paragraph or div */}
          <p>{country.name}</p> {/* Or <div>{country.name}</div> */}
        </Link>
      ))}
    </div>
  );
};

export default FlagGrid;