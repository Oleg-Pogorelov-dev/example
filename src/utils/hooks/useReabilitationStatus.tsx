import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store/store';

import { reabilitationStatusSelector } from '@/store/medhistory/selector';
import { getReabilitationStatus } from '@/store/medhistory/thunks';
import { resetReabilitationStatus } from '@/store/medhistory/reducer';

const useReabilitationStatus = () => {
  const dispatch = useAppDispatch();
  const { ehrCaseId } = useParams();

  const reabilitationStatuses = useAppSelector(reabilitationStatusSelector);

  useEffect(() => {
    dispatch(getReabilitationStatus(ehrCaseId));

    return () => {
      dispatch(resetReabilitationStatus());
    };
  }, []);

  return {
    reabilitationStatuses,
  };
};

export default useReabilitationStatus;
