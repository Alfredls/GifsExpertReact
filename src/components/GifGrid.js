import React from "react";
import { useFetchGrifs } from "../hooks/useFetchGrifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGrifs(category);

  return (
    <>
      <h3>{category}</h3>
      {/*  {loading && <p>loading...</p>} */}
      <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};
