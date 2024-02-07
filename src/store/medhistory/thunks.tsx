import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '@/utils/Axios/instance';
import { ReabilitationStatus } from '@/utils/types/medhistory';

export const getReabilitationStatus = createAsyncThunk<
  ReabilitationStatus[],
  string | undefined
>('getReabilitationStatus', async (ehrCaseId) => {
  const data = await axiosInstance.get(
    `/medhistory/${ehrCaseId}/rehabilitation`
  );

  return data.data;
});
