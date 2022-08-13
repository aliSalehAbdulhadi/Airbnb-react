import create from "zustand";

const useDataBase = create((set) => ({
  db: [],
  populatedb: (item) => set((state) => ({ db: [...state.db, item] })),
}));

export default useDataBase;
