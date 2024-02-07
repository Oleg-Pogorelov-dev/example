import { createAsyncThunk } from '@reduxjs/toolkit';
import { ScaleData } from '@/utils/types/scale';
import { axiosInstance } from '@/utils/Axios/instance';

export const getHospitalDysphagiaScale = createAsyncThunk<
  ScaleData,
  { protocolId: string }
>('getHospitalDysphagiaScale', async ({ protocolId }) => {
  const data = await axiosInstance.get(`scale/kim`, {
    params: { protocolId },
  });

  return data.data as ScaleData;
});
