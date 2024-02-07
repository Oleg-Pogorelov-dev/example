import { createAsyncThunk } from '@reduxjs/toolkit';

import { PatientData } from '@/utils/types/patient';
import { axiosInstance } from '@/utils/Axios/instance';

export const getPatientThunk = createAsyncThunk<
  PatientData,
  {
    ehrCaseId: string;
  }
>('patient/getPatientThunk', async ({ ehrCaseId }) => {
  const data = await axiosInstance.get(`patient/${ehrCaseId}`);
  return data.data as PatientData;
});
