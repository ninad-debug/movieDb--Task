import { useSearchParams } from "react-router-dom";
import { Card } from "../components/index";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import Pagination from "../components/Pagination";
import { useState } from "react";

export const Search = ({ apiPath }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm, currentPage);
  useTitle(`Search Result for ${queryTerm}`);

  const getPrevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const getNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for ${queryTerm}`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
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
