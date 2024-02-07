import { useAppDispatch, useAppSelector } from '@/store/store';
import { getIcfQualifier } from '@/store/icf/thunks';
import { icfSelectedCodeSelector } from '@/store/icf/selector';

const useFaktorDeterminant = () => {
  const dispatch = useAppDispatch();
  const selectedCodes = useAppSelector(icfSelectedCodeSelector);

  const getQualifier = (
    code: string,
    num: number,
    id: number,
    setCurrentDeterNum: (num: number) => void,
    setCurrentFactor: (num: number) => void
  ) => {
    if (code) {
      dispatch(getIcfQualifier({ code, num }));
      setCurrentDeterNum(num);
      setCurrentFactor(id);
    }
  };

  return { selectedCodes, getQualifier };
};

export default useFaktorDeterminant;
