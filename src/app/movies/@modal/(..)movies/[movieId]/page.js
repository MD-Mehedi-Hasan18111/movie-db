import Modal from "@/components/Modal";
import MovieDetail from "@/components/MovieDetail";
import React from "react";

const MovieDetailModal = ({ params }) => {
  const { movieId } = params;

  return (
    <Modal>
      <MovieDetail movieId={movieId} />
    </Modal>
  );
};

export default MovieDetailModal;
