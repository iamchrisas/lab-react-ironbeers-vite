import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function AllBeersPage() {
  const [beersList, setBeersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = (query = "") => {
    setIsLoading(true);
    const url = query
      ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      : "https://ih-beers-api2.herokuapp.com/beers";
    axios
      .get(url)
      .then((response) => {
        setBeersList(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <input
        type="text"
        placeholder="Search beers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>Error loading data!</p>
      ) : (
        <>
          {beersList.map((beer) => (
            <section className="beer-card" key={beer._id}>
              <NavLink to={`/beers/${beer._id}`}>
                <img
                  className="beer-logo"
                  src={beer.image_url}
                  alt={beer.name}
                />
                <div className="beer-info">
                  <h2>{beer.name}</h2>
                  <p>{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </NavLink>
              <hr />
            </section>
          ))}
        </>
      )}
    </>
  );
}

export default AllBeersPage;
