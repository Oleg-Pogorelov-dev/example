import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Patient, PatientData } from '@/utils/types/patient';
import { getPatientThunk } from './thunks';

const initialState: Patient = {
  isLoading: false,
  patient: {
    age: null,
    birth_dt: null,
    dept_name: null,
    fio: null,
    sex: null,
    weight: null,
    input_dt: null,
  },
};

export const patient = createSlice({
  name: 'patient',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPatientThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getPatientThunk.fulfilled,
      (state, { payload: patient }: PayloadAction<PatientData>) => {
        state.patient = patient;
        state.isLoading = false;
      }
    );
    builder.addCase(getPatientThunk.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default patient.reducer;
