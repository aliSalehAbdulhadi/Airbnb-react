import create from 'zustand';

const useLoading = create((set) => ({
  loadingHome: true,
  loadingIcons: true,

  setLoadingHome: (loading) => set(() => ({ loadingHome: loading })),
  setLoadingIcons: (loading) => set(() => ({ loadingIcons: loading })),
}));

export default useLoading;
