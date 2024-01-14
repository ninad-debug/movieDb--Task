import { useState, useEffect } from "react";

export const useCast = (movieId) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US}`;

  useEffect(() => {
    async function fetchCast() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.cast);
    }
    fetchCast();
  }, [url]);

  return { data };
};
