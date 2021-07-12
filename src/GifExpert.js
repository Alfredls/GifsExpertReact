import React, { useState } from "react";
import { GifGrid } from "./components/GifGrid";
import { Search } from "./components/Search";

export const GifExpert = () => {
  const [categories, setCategories] = useState(["new york"]);

  return (
    <div>
      <Search setCategories={setCategories} />
      <div className="main">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
