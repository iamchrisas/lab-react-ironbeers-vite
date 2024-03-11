import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading beer.</p>;

  return (
    <div>
      {beer && (
        <>
          <img
            src={beer.image_url}
            alt={`Image of ${beer.name}`}
            style={{ maxWidth: "100px" }}
          />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default RandomBeerPage;
