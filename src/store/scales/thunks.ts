import { createAsyncThunk } from '@reduxjs/toolkit';

import { ScalePostData, ScaleScoreData } from '@/utils/types/scale';
import { axiosInstance } from '@/utils/Axios/instance';

export const getScaleScore = createAsyncThunk<
  ScaleScoreData,
  {
    protocolId: string;
  }
>('getScaleScore', async ({ protocolId }) => {
  const data = await axiosInstance.get(`scale/score`, {
    params: { protocolId },
  });

  return data.data as ScaleScoreData;
});

export const postScales = createAsyncThunk(
  'postScales',
  async (data: ScalePostData) => {
    const empId = localStorage.getItem('empId');
    await axiosInstance.post(`scale`, {
      ...data,
      emp_id: empId,
    });
  }
);
