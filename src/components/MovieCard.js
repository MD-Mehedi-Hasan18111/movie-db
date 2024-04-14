import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ movieDetails }) => {
  const { poster_path, title, id } = movieDetails;

  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        src={poster_path}
        alt="movie_thumbnail"
        priority
        width={300}
        height={300}
      />
      <figcaption className="pt-4">
        <div className="h-[125px]">
          <h3 className="text-xl mb-1">{title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
          <div className="flex items-center space-x-1 mb-5">
            <Image src="/star.svg" width="14" height="14" alt="" />
            <Image src="/star.svg" width="14" height="14" alt="" />
            <Image src="/star.svg" width="14" height="14" alt="" />
            <Image src="/star.svg" width="14" height="14" alt="" />
            <Image src="/star.svg" width="14" height="14" alt="" />
          </div>
        </div>
        <Link
          href={`/movies/${id}`}
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        >
          <Image src="/tag.svg" alt="" width={20} height={20} priority />
          <span>Details</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
