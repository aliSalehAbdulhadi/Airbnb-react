import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchImages = (): any => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>([]);
  const randomNum = Math.floor(Math.random() * 20);
  const types = [
    "places",
    "houses",
    "buildings",
    "cabin",
    "lake",
    "restaurant",
    "hotel",
    "mountain",
    "sea",
    "bar",
  ];
  const randomNum2 = Math.floor(Math.random() * types.length);

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=29035030-c3f6b012376c98970c0a67f22&q=${
          types[randomNum2]
        }&image_type=photo&pretty=true&per_page=${randomNum + 1}&order=latest`,
      )
      .then((res) => {
        setData(res.data.hits);
      })
      .catch((err) => setError(err));
  }, []);
  return { data, error };
};
