import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card ">
      <img src={url} alt={title} className="card__img" />
      <p className="card__title"> {title} </p>
    </div>
  );
};
