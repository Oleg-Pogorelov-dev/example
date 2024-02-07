import { createSlice } from '@reduxjs/toolkit';

export interface ConfirmProcedureModal {
  isOpen: boolean;
}

const initialState: ConfirmProcedureModal = {
  isOpen: false,
};

export const confirmProcedureModal = createSlice({
  name: 'confirmProcedureModal',
  initialState,
  reducers: {
    setOpenProcedureModal(state) {
      state.isOpen = true;
    },
    setCloseProcedureModal(state) {
      state.isOpen = false;
    },
  },
});

export const { setOpenProcedureModal, setCloseProcedureModal } =
  confirmProcedureModal.actions;
export default confirmProcedureModal.reducer;
