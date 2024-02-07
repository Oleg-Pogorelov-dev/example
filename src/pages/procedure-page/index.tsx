import { FC } from 'react';
import { Collapse } from 'antd';

import PatientHeader from '@/components/PatientHeader';
import ConfirmProcedureModal from '@/components/ModalContents/ConfirmProcedureModal';
import Modal from '@/components/Modal';
import ProcedureCollapse from '@/widgets/ProcedureCollapse';
import useProcedures from '@/utils/hooks/useProcedures';
import usePatientInfoHeader from '@/utils/hooks/usePatientInfoHeader';
import RollUp from '@/components/RollUp';
import PatientInfo from '@/components/PatientInfo';

import * as S from './styles';

const ProcedurePage: FC = () => {
  const { patient, refreshTable, patientLoading } = usePatientInfoHeader();
  const {
    procedure,
    handleSave,
    procedureIsLoad,
    additionally,
    durationHours,
    durationMinutes,
  } = useProcedures();

  return (
    <S.Wrapper>
      <PatientHeader onRefreshClick={refreshTable} />
      {patientLoading || procedureIsLoad ? (
        <S.SpinnerWrapper>
          <S.Spinner />
        </S.SpinnerWrapper>
      ) : (
        <>
          <PatientInfo patient={patient} />
          <S.TableContainer>
            <S.HeaderProcedure>{procedure.name}</S.HeaderProcedure>
            {!!(durationHours || durationMinutes) && (
              <S.Additionally>
                Планируемое время выполнения процедуры:{' '}
                {!!durationHours && `${durationHours} часов`}
                {!!durationHours && !!durationMinutes && ','}{' '}
                {!!durationMinutes && `${durationMinutes} минут`}
              </S.Additionally>
            )}
            {!!additionally && (
              <S.Additionally>Дополнительно: {additionally}</S.Additionally>
            )}
            <S.CollapseWrapper>
              <Collapse
                expandIcon={({ isActive }) => <RollUp isActive={isActive} />}
              >
                {procedure.dates?.map((date, index) => (
                  <ProcedureCollapse
                    key={date.date}
                    data={date}
                    index={`${index}`}
                  />
                ))}
              </Collapse>
            </S.CollapseWrapper>
            <S.Gap />
            <ConfirmProcedureModal />
            <S.ButtonWrapper>
              <S.GreenButton onClick={handleSave}>Сохранить</S.GreenButton>
            </S.ButtonWrapper>
          </S.TableContainer>
          <Modal />
        </>
      )}
    </S.Wrapper>
  );
};

export default ProcedurePage;
