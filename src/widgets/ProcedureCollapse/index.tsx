import { FC, memo } from 'react';

import { ProcedureTimeStates } from '@/utils/Static/common';
import { ProcedureDate } from '@/utils/types/procedure';
import Checkbox from '@/components/Inputs/Checkbox';
import useProcedureCollapse from '@/utils/hooks/useProcedureCollapse';
import { timeInterpretationText } from '@/utils/functions';

import * as S from './styles';

interface ProcedureCollapseProps {
  index: string;
  data: ProcedureDate;
}

const ProcedureCollapse: FC<ProcedureCollapseProps> = ({
  index,
  data,
  ...props
}) => {
  const {
    isCompletedProcedures,
    handleSetProcedure,
    completedProceduresLength,
    procedureState,
    procedureStateDate,
  } = useProcedureCollapse(data);

  return (
    <S.CollapsePanelWrapper
      header={
        <S.CollapsePanelHeader>
          <S.Title>{procedureStateDate}</S.Title>
          <S.ProceduresStatus>
            <div>{`${completedProceduresLength}/${procedureState?.states.length}`}</div>
            <S.CustomCheckbox value={isCompletedProcedures} />
          </S.ProceduresStatus>
        </S.CollapsePanelHeader>
      }
      key={index}
      {...props}
    >
      <S.Block>
        <S.Content>
          {procedureState?.states?.map((state, index) => {
            const completed = state.state === ProcedureTimeStates.completed;
            const cancelled = state.state === ProcedureTimeStates.cancelled;
            const statusTitle = completed ? 'Процедура выполнена' : '';
            const time = state.time.slice(0, 5);

            if (cancelled) return;

            return (
              <S.ProcedureItem key={index}>
                <S.TextInterpritation>
                  {timeInterpretationText(state.range)}
                </S.TextInterpritation>
                <S.Time>{time}</S.Time>
                <S.Status>{statusTitle}</S.Status>
                <Checkbox
                  value={completed}
                  onChange={() => handleSetProcedure(state.cuid, state.state)}
                />
              </S.ProcedureItem>
            );
          })}
        </S.Content>
      </S.Block>
    </S.CollapsePanelWrapper>
  );
};

export default memo(ProcedureCollapse);
