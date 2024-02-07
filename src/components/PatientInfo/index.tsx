import { ButtonHTMLAttributes, FC, memo } from 'react';
import moment from 'moment';

import { PatientData } from '@/utils/types/patient';
import { colors } from '@/utils/theme';
import { showPatientInfo } from '@/utils/functions';
import { Sex } from '@/utils/Static/common';

import * as S from './styles';

interface PatientInfoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  patient: PatientData;
}
const PatientInfo: FC<PatientInfoProps> = ({ patient }) => {
  const patientIconColor =
    patient?.sex === Sex.male
      ? colors.blue500
      : patient?.sex === Sex.female
      ? colors.red400
      : colors.grey100;

  const receiptDate = moment(patient.input_dt).utc().format('DD.MM.YYYY HH:mm');

  return (
    <S.Patient>
      <S.StyledNameCell
        name={patient?.fio ?? ''}
        age={patient?.age ?? 0}
        color={patientIconColor}
      />
      <S.DateOfbirth>{showPatientInfo(patient)}</S.DateOfbirth>
      <S.Title>{patient?.dept_name}</S.Title>
      <p>
        <S.Title>ДАТА ПОСТУПЛЕНИЯ: </S.Title>
        {receiptDate}
      </p>
    </S.Patient>
  );
};

export default memo(PatientInfo);
