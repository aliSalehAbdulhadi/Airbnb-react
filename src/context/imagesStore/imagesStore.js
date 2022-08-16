import create from 'zustand';
import axios from 'axios';
import axiosRetry from 'axios-retry';

const randomNumBetween = (min, max) => {
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
  'villa',
];
const randomNum2 = Math.floor(Math.random() * types.length);
const imagesStore = (set) => ({
  images: [],
  error: [],
  fetch: async () => {
    axiosRetry(axios, { retries: 5 });
    axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });
    try {
      const data = axios.get(
        `https://pixabay.com/api/?key=29035030-c3f6b012376c98970c0a67f22&q=${
          types[randomNum2]
        }&image_type=photo&pretty=true&per_page=${
          randomNumBetween(10, 20) + 3
        }&order=latest`,
      );
      set({ images: await (await data).data.hits });
    } catch (err) {
      set({ error: err });
    }
  },
});

export default create(imagesStore);
