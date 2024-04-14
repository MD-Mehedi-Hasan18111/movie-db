import MovieCard from "@/components/MovieCard";
import { getMovieList } from "@/lib/movies";
import React from "react";

const Movies = async () => {
  const data = await getMovieList();

  return (
    <div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {data?.movies?.slice(0, 12)?.map((movie) => {
          return <MovieCard key={movie?.id} movieDetails={movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
