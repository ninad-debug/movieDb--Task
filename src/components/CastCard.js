import Backup from "../assets/images/backup.png";

export const CastCard = ({ movie }) => {
  const { original_name, profile_path, character } = movie;
  const image = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : Backup;

  console.log(movie);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <img className="rounded-t-lg" src={image} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {original_name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Character: {character}
        </p>
      </div>
    </div>
  );
};
