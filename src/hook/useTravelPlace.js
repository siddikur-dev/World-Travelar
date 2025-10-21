import axios from "axios";
import { useEffect, useState } from "react";

const useTravelPlace = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios("../TravelPlaces.json")
      .then((data) => setPlaces(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { places, loading, error };
};

export default useTravelPlace;
