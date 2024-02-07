import { RootState } from '@/store/store';

export const patientSelector = (state: RootState) => state.patient.patient;

export const isLoadingSelector = (state: RootState) => state.patient.isLoading;
