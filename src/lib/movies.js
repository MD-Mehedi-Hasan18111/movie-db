const getMoviesJSON = {
  allMovie: () => import("./movie-data.json").then((module) => module.default),
};

export const getMovieList = async () => getMoviesJSON["allMovie"]();
