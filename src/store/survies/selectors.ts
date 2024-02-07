import { RootState } from '@/store/store';

export const unregisteredTableSelector = (state: RootState) =>
  state.survies.tableData;

export const unregistereSurviesSelector = (state: RootState) =>
  state.survies.surviesList;
