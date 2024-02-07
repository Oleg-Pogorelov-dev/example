import { RootState } from '../store';

export const dateSelector = (state: RootState) => state.common.date;

export const modalSelector = (state: RootState) => state.common.contentName;

export const commonIsLoadSelector = (state: RootState) =>
  state.common.isLoading;
