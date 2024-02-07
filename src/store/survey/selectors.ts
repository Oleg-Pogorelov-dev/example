import { RootState } from '@/store/store';

export const isLoadingSelector = (state: RootState) => state.survey.isLoading;

export const protocolIdSelector = (state: RootState) => state.survey.protocolId;

export const nazNameSelector = (state: RootState) => state.survey.nazName;

export const additionallySelector = (state: RootState) =>
  state.survey.additionally;

export const durationHoursSelector = (state: RootState) =>
  state.survey.durationHours;

export const durationMinutesSelector = (state: RootState) =>
  state.survey.durationMinutes;

export const nazCodeSelector = (state: RootState) => state.survey.nazCode;
