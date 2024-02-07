import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModalContentName } from '@/utils/types/element';
import { getMedicalHistory } from './thunks';

export interface Common {
  date: string | null;
  contentName: ModalContentName | null;
  isLoading: boolean;
}

const initialState: Common = {
  contentName: null,
  date: null,
  isLoading: false,
};

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setDate(state, { payload }) {
      state.date = payload;
    },
    setModalOpen(state, { payload }: PayloadAction<ModalContentName>) {
      state.contentName = payload;
    },
    setModalClose(state) {
      state.contentName = null;
    },
    resetDate(state) {
      state.date = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMedicalHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMedicalHistory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getMedicalHistory.fulfilled, (state, { payload }) => {
        window.open(payload.url, '_blank');
        state.isLoading = false;
      });
  },
});

export const { setDate, setModalClose, setModalOpen, resetDate } =
  common.actions;
export default common.reducer;
