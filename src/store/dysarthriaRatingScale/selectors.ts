import { RootState } from '@/store/store';

export const dysarthriaRatingScaleSelector = (state: RootState) =>
  state.dysarthriaRatingScale.payload;

export const dysarthriaRatingIsLoadSelector = (state: RootState) =>
  state.dysarthriaRatingScale.isLoading;
