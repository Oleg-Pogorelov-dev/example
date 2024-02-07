import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  procedureIsLoadSelector,
  procedureSelector,
} from '@/store/procedure/selectors';
import { getAssignmentProcedure } from '@/store/procedure/thunks';
import { resetProcedure } from '@/store/procedure/reducer';
import { setOpenProcedureModal } from '@/store/confirmProcedureModal/reducer';
import { getAssignmentNaz } from '@/store/survey/thunks';
import { resetAssigmentInfo } from '@/store/survey/reducer';
import {
  additionallySelector,
  durationHoursSelector,
  durationMinutesSelector,
} from '@/store/survey/selectors';

const useProcedures = () => {
  const dispatch = useAppDispatch();
  const { nazId } = useParams();
  const procedure = useAppSelector(procedureSelector);
  const procedureIsLoad = useAppSelector(procedureIsLoadSelector);
  const additionally = useAppSelector(additionallySelector);
  const durationHours = useAppSelector(durationHoursSelector);
  const durationMinutes = useAppSelector(durationMinutesSelector);

  useEffect(() => {
    dispatch(getAssignmentProcedure(nazId as string));
    dispatch(getAssignmentNaz(nazId as string));

    return () => {
      dispatch(resetProcedure());
      dispatch(resetAssigmentInfo());
    };
  }, []);

  const handleSave = () => {
    dispatch(setOpenProcedureModal());
  };

  return {
    procedure,
    handleSave,
    procedureIsLoad,
    additionally,
    durationHours,
    durationMinutes,
  };
};

export default useProcedures;
