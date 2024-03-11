import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beerInfo, setBeerInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeerInfo(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [beerId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading beer details.</p>;

  return (
    <div>
      <img
        src={beerInfo.image_url || "path/to/default-image.png"}
        alt={`Image of ${beerInfo.name}`}
      />
      <h2>{beerInfo.name}</h2>
      <p>{beerInfo.tagline}</p>
      <p>{beerInfo.first_brewed}</p>
      <p>{beerInfo.attenuation_level}</p>
      <p>{beerInfo.description}</p>
      <p>{beerInfo.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
