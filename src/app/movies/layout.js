import React from "react";

const MovieLayout = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default MovieLayout;
