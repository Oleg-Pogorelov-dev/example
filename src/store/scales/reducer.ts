import { createSlice } from '@reduxjs/toolkit';

import { ScaleScore } from '@/utils/types/scale';
import { getScaleScore, postScales } from './thunks';
import { message } from '@/utils/message';

const initialState: ScaleScore = {
  isLoading: false,
  data: {
    wasserman_score: null,
    kim_score: null,
    dysarthria_score: null,
  },
};

const scaleScore = createSlice({
  name: 'scaleScore',
  initialState,
  reducers: {
    resetScaleScore() {
      return initialState;
    },
    resetWassermanScaleScore(state) {
      return { ...state, data: { ...state.data, wasserman_score: null } };
    },
    resetKimScaleScore(state) {
      return { ...state, data: { ...state.data, kim_score: null } };
    },
    resetDysarthriaScaleScore(state) {
      return { ...state, data: { ...state.data, dysarthria_score: null } };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getScaleScore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getScaleScore.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getScaleScore.fulfilled, (state, { payload }) => {
        state.data = { ...payload };
        state.isLoading = false;
      })
      .addCase(postScales.pending, () => {})
      .addCase(postScales.rejected, () => {})
      .addCase(postScales.fulfilled, () => {
        message({
          title: 'Изменения успешно сохранены',
          type: 'info',
        });
      });
  },
});

export const {
  resetScaleScore,
  resetWassermanScaleScore,
  resetKimScaleScore,
  resetDysarthriaScaleScore,
} = scaleScore.actions;

export default scaleScore.reducer;
