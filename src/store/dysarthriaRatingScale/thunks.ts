import { createAsyncThunk } from '@reduxjs/toolkit';
import { ScaleData } from '@/utils/types/scale';
import { axiosInstance } from '@/utils/Axios/instance';

export const getDysarthriaRatingScale = createAsyncThunk<
  ScaleData,
  { protocolId: string }
>('getDysarthriaRatingScale', async ({ protocolId }) => {
  const data = await axiosInstance.get(`scale/dysarthria`, {
    params: { protocolId },
  });

  return data.data as ScaleData;
});
