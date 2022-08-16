import create from 'zustand';
import { useScrollY } from '../../hooks/useScrollY';

const useScrollStore = create(() => ({
  scroll: 0,
}));

export default useScrollStore;
