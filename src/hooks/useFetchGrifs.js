import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGrifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      /* setTimeout(() => {
      }, 3000); */

      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);
  return state;
};
