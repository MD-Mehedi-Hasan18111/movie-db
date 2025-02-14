"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  const { movieId } = useParams();

  return (
    <div className="flex flex-col space-y-10 justify-center">
      <h2 className="text-2xl text-gray-500 text-center mt-[100px]">
        This movie with {movieId} id was not found!
      </h2>
      <button
        onClick={() => router.back()}
        className="bg-green-500 rounded-[8px] w-[150px] py-2 text-lg text-white mx-auto"
      >
        Back
      </button>
    </div>
  );
};

export default NotFound;
