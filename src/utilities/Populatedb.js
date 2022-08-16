import { dynamicData } from '../data/DynamicData.tsx';
import useDataBase from '../../context/dataStore/dataStore';

export const PopulateDataBase = () => {
  const populatedb = useDataBase((state) => state.populatedb);
  const number = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4];

  number.map(() => populatedb(dynamicData()));
};
