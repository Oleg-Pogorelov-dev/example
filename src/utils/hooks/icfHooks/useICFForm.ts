import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { getIcfCodes } from '@/store/icf/thunks';
import {
  icfSelectedCodeSelector,
  savedIcfSelector,
} from '@/store/icf/selector';

import { createNewFactorField, resetSelected } from '@/store/icf/reducer';

const useICFForm = () => {
  const dispatch = useAppDispatch();
  const icfSelectedCodes = useAppSelector(icfSelectedCodeSelector);
  const savedIcf = useAppSelector(savedIcfSelector);

  const [currentDeterNum, setCurrentDeterNum] = useState(0);
  const [currentFactor, setCurrentFactor] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const reset = () => {
    dispatch(resetSelected());
  };

  const openIcfModal = (index: number) => {
    dispatch(getIcfCodes());
    setCurrentFactor(index);
  };

  const createNewField = () => dispatch(createNewFactorField());

  return {
    icfSelectedCodes,
    isOpen,
    currentDeterNum,
    currentFactor,
    savedIcf,
    setIsOpen,
    setCurrentFactor,
    setCurrentDeterNum,
    reset,
    openIcfModal,
    createNewField,
  };
};

export default useICFForm;
