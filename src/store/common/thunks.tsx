import { createAsyncThunk } from '@reduxjs/toolkit';
import { UUID } from 'crypto';

import { axiosInstance } from '@/utils/Axios/instance';

export const getMedicalHistory = createAsyncThunk<
  any,
  { ehrCaseId?: string; token: UUID }
>('getMedicalHistory', async ({ ehrCaseId, token }) => {
  const data = await axiosInstance.get(`medhistory/${ehrCaseId}`, {
    headers: {
      Authorization: token,
    },
  });

  return data.data;
});
