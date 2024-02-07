import { Sex } from '../Static/common';

export type PatientData = {
  age: null | number;
  birth_dt: string | null;
  dept_name: string | null;
  fio: string | null;
  sex: Sex | null;
  weight: null;
  input_dt: Date | null;
};

export type Patient = {
  isLoading: boolean;
  patient: PatientData;
};

export type Assignment = {
  ehr_case_id: string;
  naz_code: string;
  naz_name: string;
  naz_state_id: number;
  naz_view: number;
  protocol_id: string;
  run_dt: null | string;
  sign_dt: null | string;
  additionally: string;
  duration_minutes: number | null;
  duration_hours: number | null;
};
