import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { isLoadingSelector, patientSelector } from '@/store/patient/selectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { nazNameSelector } from '@/store/survey/selectors';
import { dateSelector } from '@/store/common/selector';
import { getPatientThunk } from '@/store/patient/thunks';

const usePatientInfoHeader = () => {
  const { ehrCaseId, nazId } = useParams();

  const dispatch = useAppDispatch();

  const patient = useAppSelector(patientSelector);
  const patientLoading = useAppSelector(isLoadingSelector);
  const nazName = useAppSelector(nazNameSelector);
  const date = useAppSelector(dateSelector);

  useEffect(() => {
    refreshTable();
  }, [date, dispatch, ehrCaseId]);

  const refreshTable = () => {
    if (ehrCaseId) {
      dispatch(getPatientThunk({ ehrCaseId }));
    }
  };

  return {
    patient,
    patientLoading,
    nazName,
    ehrCaseId,
    nazId,
    refreshTable,
  };
};

export default usePatientInfoHeader;
