import { createSlice } from '@reduxjs/toolkit';

export interface ConfirmScalesModal {
  isOpen: boolean;
}

const initialState: ConfirmScalesModal = {
  isOpen: false,
};

export const confirmScalesModal = createSlice({
  name: 'confirmScalesModal',
  initialState,
  reducers: {
    setOpen(state) {
      state.isOpen = true;
    },
    setClose(state) {
      state.isOpen = false;
    },
  },
});

export const { setOpen, setClose } = confirmScalesModal.actions;
export default confirmScalesModal.reducer;
