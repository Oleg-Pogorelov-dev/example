import { RootState } from './store';

export const tableDataLoadingSelector = (state: RootState) =>
  state.survies.tableDataLoading;

export const tableDataSelector = (state: RootState) => state.survies.tableData;

export const searchFilterSelector = (state: RootState) =>
  state.survies.filtersFromPanel.search;

export const filteredTableDataSelector = (state: RootState) =>
  state.survies.filteredTableData;
