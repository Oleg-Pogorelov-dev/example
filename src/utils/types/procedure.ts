import { ProcedureTimeStates } from '../Static/common';

type ProcedureTime = {
  time: string;
  state: ProcedureTimeStates;
  cuid: string;
  range: number;
  isChanged?: boolean;
};

type ProcedureTimePost = {
  state: ProcedureTimeStates;
  cuid: string;
};

export type ProcedureDate = {
  date: string;
  states: ProcedureTime[];
};

export type ProcedureData = {
  name: string;
  dates: ProcedureDate[];
};

export type ProcedureDataPost = {
  states: ProcedureTimePost[];
};

export type Procedure = {
  isLoading: boolean;
  data: ProcedureData;
  postData: ProcedureDataPost;
};
