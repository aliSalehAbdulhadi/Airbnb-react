import create from "zustand";
import axios from "axios";
import axiosRetry from "axios-retry";

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
  "villa",
];
const randomNum2 = Math.floor(Math.random() * types.length);
const imagesStore = (set) => ({
  images: [],
  error: [],
  fetch: async () => {
    axiosRetry(axios, { retries: 10 });
    axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });
    try {
      const data = axios.get(
        `https://pixabay.com/api/?key=29035030-c3f6b012376c98970c0a67f22&q=${
          types[randomNum2]
        }&image_type=photo&pretty=true&per_page=${randomNum + 3}&order=latest`,
      );
      set({ images: await data });
    } catch (err) {
      set({ error: err });
    }
  },
});

export default create(imagesStore);
