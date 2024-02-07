import { FC } from 'react';
import moment from 'moment';

import PatientHeader from '@/components/PatientHeader';
import usePatientInfoHeader from '@/utils/hooks/usePatientInfoHeader';
import useReabilitationStatus from '@/utils/hooks/useReabilitationStatus';
import { ReabilitationFields, statusFields } from '@/utils/Static/common';
import PatientInfo from '@/components/PatientInfo';

import * as S from './styles';

const ReabilitationStatusPage: FC = () => {
  const { patient, patientLoading, refreshTable } = usePatientInfoHeader();
  const { reabilitationStatuses } = useReabilitationStatus();

  return (
    <S.Wrapper>
      <PatientHeader onRefreshClick={refreshTable} />
      {patientLoading ? (
        <S.SpinnerWrapper>
          <S.Spinner />
        </S.SpinnerWrapper>
      ) : (
        <>
          <PatientInfo patient={patient} />
          <S.StatusContainer>
            <S.Label>Реабилитационный статус:</S.Label>
            {reabilitationStatuses?.map((reabStatus, index) => {
              const doctorInfo = `${reabStatus.empFio} ${
                reabStatus.empPost
              } ${moment(reabStatus.signDt).format('DD.MM.YYYY')}`;

              return (
                <S.StatusWrapper key={index}>
                  <S.DoctorInfoWrapper>
                    <S.DoctorInfo>{doctorInfo}</S.DoctorInfo>
                  </S.DoctorInfoWrapper>
                  <S.StatusBlock>
                    {statusFields.map((fieldName, idx) => {
                      const field =
                        reabStatus[
                          ReabilitationFields[
                            fieldName as keyof object
                          ] as ReabilitationFields
                        ];

                      if (!field.length) return;

                      return (
                        <S.StatusField key={idx}>
                          <S.StatusName>{fieldName}:</S.StatusName>
                          <S.StatusValue>{field.join(', ')}</S.StatusValue>
                        </S.StatusField>
                      );
                    })}
                  </S.StatusBlock>
                </S.StatusWrapper>
              );
            })}
          </S.StatusContainer>
        </>
      )}
    </S.Wrapper>
  );
};

export default ReabilitationStatusPage;
