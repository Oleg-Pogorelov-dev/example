import { useMemo, useState } from 'react';
import moment from 'moment';

import { useAppDispatch } from '@/store/store';
import { setProcedure } from '@/store/procedure/reducer';
import { ProcedureTimeStates } from '../Static/common';
import { ProcedureDate } from '../types/procedure';

const useProcedureCollapse = (data: ProcedureDate) => {
  const dispatch = useAppDispatch();

  const [procedureState, setProcedureState] = useState(data);

  const procedureStateDate = useMemo(() => {
    return moment(procedureState?.date).format('DD.MM.YYYY');
  }, [procedureState?.date]);

  const isCompletedProcedures = useMemo(() => {
    return procedureState.states.every(
      (state) => state.state === ProcedureTimeStates.completed
    );
  }, [procedureState.states]);

  const completedProceduresLength = useMemo(() => {
    return procedureState.states.filter(
      (state) => state.state === ProcedureTimeStates.completed
    ).length;
  }, [procedureState.states]);

  const handleSetProcedure = (cuid: string, state: ProcedureTimeStates) => {
    const newState = procedureState.states.map((item) =>
      item.cuid === cuid
        ? {
            ...item,
            cuid,
            state:
              state === ProcedureTimeStates.completed
                ? ProcedureTimeStates.initial
                : ProcedureTimeStates.completed,
          }
        : item
    );

    setProcedureState({ ...procedureState, states: newState });
    dispatch(
      setProcedure({
        cuid,
        state:
          state === ProcedureTimeStates.completed
            ? ProcedureTimeStates.initial
            : ProcedureTimeStates.completed,
      })
    );
  };

  return {
    isCompletedProcedures,
    handleSetProcedure,
    completedProceduresLength,
    procedureState,
    procedureStateDate,
  };
};

export default useProcedureCollapse;
