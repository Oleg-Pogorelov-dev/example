import { createAsyncThunk } from '@reduxjs/toolkit';

import { ScaleData } from '@/utils/types/scale';
import { axiosInstance } from '@/utils/Axios/instance';

export const getScaleOfWasserman = createAsyncThunk<
  ScaleData,
  {
    protocolId: string;
  }
>('getScaleOfWasserman', async ({ protocolId }) => {
  const data = await axiosInstance.get(`scale/wasserman`, {
    params: { protocolId },
  });

  return data.data as ScaleData;
});
