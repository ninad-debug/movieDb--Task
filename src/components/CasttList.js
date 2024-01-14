import { useCast } from "../hooks/useCast";
import { CastCard } from "./CastCard";

export const CasttList = ({ movieId }) => {
  const { data } = useCast(movieId);
  console.log(data);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {data?.map((cast) => (
            <CastCard key={cast?.id} movie={cast} />
          ))}
        </div>
      </section>
    </main>
  );
};
