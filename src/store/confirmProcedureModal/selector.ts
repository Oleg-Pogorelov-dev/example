import { RootState } from '../store';

export const isOpenProcedureModalSelector = (state: RootState) =>
  state.confirmProcedureModal.isOpen;
