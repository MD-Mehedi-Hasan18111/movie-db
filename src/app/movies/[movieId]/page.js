import MovieDetail from "@/components/MovieDetail";
import React from "react";

const MovieDetails = ({ params: { movieId } }) => {
  return <MovieDetail movieId={movieId} />;
};

export default MovieDetails;
