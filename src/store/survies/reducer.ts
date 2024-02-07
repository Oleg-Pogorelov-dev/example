import { createSlice } from '@reduxjs/toolkit';
import { getAssignmentThunk } from '@/store/survies/thunks';
import { FILTERS_FROM_PANEL } from '@/utils/Static/common';
import { TablePatient } from '@/utils/types/column';
import { FiltersFromPanel } from '@/utils/types/filter';
import { filterUnregistered } from '@/utils/functions';

export type Survies = {
  tableData: TablePatient[];
  filteredTableData: TablePatient[];
  filtersFromPanel: FiltersFromPanel;
  tableDataLoading: boolean;
  surviesList: number | null;
};

type FilterName = keyof Survies['filtersFromPanel'];

const initialState: Survies = {
  tableData: [],
  filteredTableData: [],
  filtersFromPanel: FILTERS_FROM_PANEL,
  tableDataLoading: false,
  surviesList: 0,
};

export const survies = createSlice({
  name: 'survies',
  initialState,
  reducers: {
    setUregisteredTableFilters(
      state: Survies,
      {
        payload: { filterName, value },
      }: {
        payload: {
          filterName: FilterName;
          value: string;
        };
      }
    ) {
      state.filtersFromPanel[filterName] = value;
      state.filteredTableData = filterUnregistered(state);
    },
    resetUnregisteredData(state: Survies) {
      state.tableData = [];
      state.filteredTableData = [];
      state.filtersFromPanel = FILTERS_FROM_PANEL;
      state.tableDataLoading = false;
      state.surviesList = null;
    },
    filterUnregisteredTable(state) {
      state.filteredTableData = filterUnregistered(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAssignmentThunk.pending, (state) => {
        state.tableDataLoading = true;
      })
      .addCase(getAssignmentThunk.fulfilled, (state, { payload }) => {
        if (payload.length) {
          state.tableData = payload?.map((el: TablePatient, index: number) => ({
            ...el,
            key: index,
          }));
          state.filteredTableData = filterUnregistered(state);
          state.surviesList = new Set(
            payload?.map((elem: TablePatient) => elem.ehr_case_id)
          ).size;
        } else {
          state.tableData = [];
          state.filteredTableData = [];
          state.surviesList = 0;
        }
        state.tableDataLoading = false;
      })
      .addCase(getAssignmentThunk.rejected, (state) => {
        state.tableData = [];
        state.filteredTableData = [];
        state.tableDataLoading = false;
      });
  },
});

export const {
  setUregisteredTableFilters,
  resetUnregisteredData,
  filterUnregisteredTable,
} = survies.actions;
export default survies.reducer;
