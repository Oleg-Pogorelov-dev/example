import { createSlice } from '@reduxjs/toolkit';

import { ReabilitationStatus } from '@/utils/types/medhistory';
import { getReabilitationStatus } from './thunks';

export interface Medhistory {
  isLoading: boolean;
  reabilitationStatuses: ReabilitationStatus[];
}

const initialState: Medhistory = {
  isLoading: false,
  reabilitationStatuses: [],
};

export const medhistory = createSlice({
  name: 'medhistory',
  initialState,
  reducers: {
    resetReabilitationStatus(state) {
      state.reabilitationStatuses = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReabilitationStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReabilitationStatus.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getReabilitationStatus.fulfilled, (state, { payload }) => {
        if (payload) {
          state.reabilitationStatuses = payload;
        }
      });
  },
});

export const { resetReabilitationStatus } = medhistory.actions;
export default medhistory.reducer;
