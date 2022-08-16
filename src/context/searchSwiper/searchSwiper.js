import create from "zustand";

const useSearchSwiper = create((set) => ({
  swiper: "",
  clickedSwiper: (item) => set(() => ({ swiper: item })),
}));

export default useSearchSwiper;
