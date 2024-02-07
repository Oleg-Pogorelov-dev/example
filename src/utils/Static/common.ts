import { TableProps } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { TablePatient } from '../types/column';

export enum Sex {
  male = 1,
  female = 2,
  indeterminate = 3,
}

export enum ReabilitationFields {
  'МКФ' = 'icf',
  'Шкалы' = 'scales',
  'Описание' = 'descriptions',
  'Рекомендации' = 'recomendations',
}

export enum ProcedureTimeStates {
  initial = 'initial',
  completed = 'completed',
  cancelled = 'cancelled',
}

export enum TotalsOfScales {
  hospital = 14,
  wasserman = 63,
  dysarthria = 76,
}

export const TABLE_DEFAULT_PROPS: TableProps<TablePatient> = {
  size: 'small',
  pagination: false,
  tableLayout: 'auto',
};

export const FILTERS_FROM_PANEL = {
  search: '',
  locus: '',
};

export const MAIN_TABLE_PADDING = 12;
export const MAIN_TABLE_BOTTOM_SPACE = 10;
export const MAIN_TABLE_HORIZONTAL_SPACE = 10;
export const DELAY_SEARCH = 5000;

export const userProfilesColumns: ColumnsType<any> = [
  {
    title: 'Отделение',
    dataIndex: 'deptName',
    key: 'deptName',
  },
  {
    title: 'Должность',
    key: 'post',
    dataIndex: 'post',
  },
];

export const statusFields = ['МКФ', 'Шкалы', 'Описание', 'Рекомендации'];
