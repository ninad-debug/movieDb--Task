import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { Card } from "../components/index";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`;

  const getPrevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const getNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
    window.scrollTo(0, 0);
  }, [url]);

  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {data?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
        <Pagination
          getPrevPage={getPrevPage}
          getNextPage={getNextPage}
          currentPage={currentPage}
        />
      </section>
    </main>
  );
};
