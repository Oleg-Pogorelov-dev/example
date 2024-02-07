import { RootState } from '../store';

export const medhistoryIsLoadSelector = (state: RootState) =>
  state.medhistory.isLoading;

export const reabilitationStatusSelector = (state: RootState) =>
  state.medhistory.reabilitationStatuses;
