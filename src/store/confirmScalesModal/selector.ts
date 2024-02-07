import { RootState } from '../store';

export const isOpenSelector = (state: RootState) =>
  state.confirmScalesModal.isOpen;
