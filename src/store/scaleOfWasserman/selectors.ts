import { RootState } from '@/store/store';

export const scaleOfWassermanSelector = (state: RootState) =>
  state.scaleOfWasserman.payload;

export const wassermanIsLoadSelector = (state: RootState) =>
  state.scaleOfWasserman.isLoading;
