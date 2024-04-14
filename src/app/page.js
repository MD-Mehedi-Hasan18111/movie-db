"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/movies");
  }, [router]);

  return (
    <div>
      <h2>Movies Page Loading...</h2>
    </div>
  );
};

export default Home;
