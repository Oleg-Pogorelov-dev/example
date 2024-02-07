import { RootState } from '@/store/store';

export const scaleScoreSelector = (state: RootState) => state.scaleScore.data;
export const scaleScoreIsLoadSelector = (state: RootState) =>
  state.scaleScore.isLoading;
