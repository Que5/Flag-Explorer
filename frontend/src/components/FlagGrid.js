import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/action";
import { Link } from "react-router-dom";

const FlagGrid = () => {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector((state) => state.countries);

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
        <Link to={`/country/${country.name}`} key={country.name}>
          <img src={country.flag} alt={`${country.name} flag`} width="100" />
        </Link>
      ))}
    </div>
  );
};


export default FlagGrid;
