import { useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { savedIcfSelector } from '@/store/icf/selector';
import { modalSelector } from '@/store/common/selector';
import { SavedIcf } from '@/utils/types/icf';
import { removeSavedIcf } from '@/store/icf/reducer';

const useDiagnosisModal = () => {
  const dispatch = useAppDispatch();

  const contentName = useAppSelector(modalSelector);
  const savedIcf = useAppSelector(savedIcfSelector);

  const [searchValue, setSearchValue] = useState<string>('');

  const filteredIcf = useMemo(
    () =>
      savedIcf?.filter(
        (item) =>
          item.codeMkfCode.includes(searchValue) ||
          item.codeMkfValue.includes(searchValue)
      ),
    [savedIcf, searchValue]
  );

  const removeIcf = (icf: SavedIcf) => {
    const fullCode =
      icf.categoryMkf +
      icf.qualifierCode1 +
      icf.qualifierCode2 +
      icf.qualifierCode3 +
      icf.qualifierCode4;

    dispatch(removeSavedIcf(fullCode));
  };

  return {
    contentName,
    searchValue,
    setSearchValue,
    filteredIcf,
    removeIcf,
  };
};

export default useDiagnosisModal;
