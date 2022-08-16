import axios from 'axios';
import axiosRetry from 'axios-retry';
import { useEffect, useState } from 'react';
import useSearchSwiper from '../context/searchSwiper/searchSwiper';

export const FetchImages = () => {
  const [rawImages, setImages] = useState<any>([]);
  const [error, setError] = useState<any>([]);
  const currSwiper = useSearchSwiper((state: any) => state.swiper);
  const images = rawImages.sort(function () {
    return 0.5 - Math.random();
  });
  const randomNumBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const types = [
    'houses',
    'buildings',
    'cabin',
    'lake',
    'restaurant',
    'hotel',
    'mountain',
    'sea',
    'bar',
  ];
  const randomNum2 = Math.floor(Math.random() * types.length);

  useEffect(() => {
    axiosRetry(axios, { retries: 10 });
    axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });
    axios
      .get(
        `https://pixabay.com/api/?key=29035030-c3f6b012376c98970c0a67f22&q=${
          currSwiper === '' ? types[randomNum2] : currSwiper
        }&image_type=photo&pretty=true&per_page=${randomNumBetween(8, 15)}`,
      )
      .then((res) => {
        setImages(res.data.hits);
      })
      .catch((err) => {
        if (err.response.status !== 200) {
          setError(err);
        }
      });
  }, [currSwiper]);
  return { images, error };
};
