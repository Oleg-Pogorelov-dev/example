import { RootState } from '@/store/store';

export const hospitalDysphagiaScaleSelector = (state: RootState) =>
  state.hospitalDysphagiaScale.payload;

export const hospitalDysphagiaIsLoadSelector = (state: RootState) =>
  state.hospitalDysphagiaScale.isLoading;
