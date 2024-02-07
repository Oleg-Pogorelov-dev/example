import { useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { searchIcf } from '@/store/icf/thunks';
import {
  icfCodesChildrenSelector,
  icfCodesSelector,
  icfQualifierSelector,
  searchedValuesSelector,
} from '@/store/icf/selector';
import { modalSelector } from '@/store/common/selector';
import {
  resetIcfCodes,
  resetSearchedValues,
  setIcfCode,
  setQualifier,
} from '@/store/icf/reducer';
import { IcfCode, Qualifier } from '@/utils/types/icf';
import { debounce } from '@/utils/functions';
import { DELAY_SEARCH } from '@/utils/Static/common';

const useFactorModal = () => {
  const dispatch = useAppDispatch();
  const contentName = useAppSelector(modalSelector);
  const searchedValues = useAppSelector(searchedValuesSelector);
  const qualifiers = useAppSelector(icfQualifierSelector);
  const icfCodes = useAppSelector(icfCodesSelector);
  const icfCodesChildren = useAppSelector(icfCodesChildrenSelector);

  const [searchValue, setSearchValue] = useState<string>('');
  const [timeId, setTimeId] = useState<ReturnType<typeof setTimeout>>();

  const filteredQualifiers = useMemo(
    () =>
      qualifiers?.filter(
        (item) =>
          item.code.includes(searchValue) || item.value.includes(searchValue)
      ),
    [searchValue, qualifiers]
  );

  const clearSearchInput = () => {
    clearTimeout(timeId);
    setSearchValue('');
    dispatch(resetSearchedValues());
  };

  const postIcfCode = (currentFactor: number, item: IcfCode) => {
    dispatch(
      setIcfCode({
        id: currentFactor,
        category: item.complexInfo.category,
        code: item.code,
        value: item.value,
        qualifierQuantity: item.complexInfo.qualifierQuantity,
      })
    );
  };

  const postQualifier = (currentFactor: number, num = 0, item: Qualifier) => {
    dispatch(
      setQualifier({
        id: currentFactor,
        num,
        code: item?.code,
        value: item?.value,
        type: item?.termName,
      })
    );
  };

  const handleOnSearchChange = (value: string) => {
    if (value.length < 3) {
      clearTimeout(timeId);
    } else {
      debounce({
        id: timeId,
        setId: setTimeId,
        dispatch,
        action: searchIcf,
        delay: DELAY_SEARCH,
        data: searchValue,
      });
    }
    setSearchValue(value);
  };

  const resetIcf = () => dispatch(resetIcfCodes());

  const cancel = () => {
    clearTimeout(timeId);
    setSearchValue('');
    resetIcf();
  };

  return {
    icfCodes,
    icfCodesChildren,
    searchValue,
    contentName,
    searchedValues,
    clearSearchInput,
    postIcfCode,
    qualifiers,
    filteredQualifiers,
    postQualifier,
    handleOnSearchChange,
    resetIcf,
    cancel,
  };
};

export default useFactorModal;
