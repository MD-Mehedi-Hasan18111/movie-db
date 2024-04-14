import { getAllMovies, getMovieById } from "@/lib/data";
import { NextResponse } from "next/server";

const movies = getAllMovies();

export async function GET(request, { params }) {
  const movieId = params?.id;
  const data = getMovieById(movieId);
  return NextResponse.json(data);
}

export async function PATCH(request, { params }) {
  const movieContext = await request.json();
  const movieId = params.id;
  const movieIndex = movies.findIndex((movie) => movie.id === Number(movieId));
  movies[movieIndex].title = movieContext.title;

  return Response.json(movies[movieIndex]);
}

export async function DELETE(request, { params }) {
  const movieId = params.id;
  const movieIndex = movies.findIndex((movie) => movie.id === Number(movieId));
  const movieDelete = movies[movieIndex];
  movies.splice(movieIndex, 1);

  return Response.json(movieDelete);
}
