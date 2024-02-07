import { Sex } from '../Static/common';

export type TablePatient = {
  ward: string;
  sex: Sex;
  fio: string;
  ehr_case_id: string;
  dept_name: string;
  age: number;
  naz_id: string;
  naz_name: string;
  kind: 'cons' | 'proc';
  plan_emp: string[];
};
