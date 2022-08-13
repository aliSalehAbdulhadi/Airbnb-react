import axios from "axios";
import axiosRetry from "axios-retry";
import { useEffect, useState } from "react";

export const useFetchImages = (): any => {
  const [images, setImages] = useState<any>([]);
  const [error, setError] = useState<any>([]);
  const randomNum = Math.floor(Math.random() * 10);
  const types = [
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
    axiosRetry(axios, { retries: 10 });
    axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });
    axios
      .get(
        `https://pixabay.com/api/?key=29035030-c3f6b012376c98970c0a67f22&q=${
          types[randomNum2]
        }&image_type=photo&pretty=true&per_page=${randomNum + 3}&order=latest`,
      )
      .then((res) => {
        setImages(res.data.hits);
      })
      .catch((err) => {
        if (err.response.status !== 200) {
          setError(err);
        }
      });
  }, []);
  return { images, error };
};
