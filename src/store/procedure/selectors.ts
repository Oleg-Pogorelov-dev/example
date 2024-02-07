import { RootState } from '@/store/store';

export const procedureSelector = (state: RootState) => state.procedure.data;

export const procedurePostSelector = (state: RootState) =>
  state.procedure.postData;

export const procedureIsLoadSelector = (state: RootState) =>
  state.procedure.isLoading;
