import { createSlice } from '@reduxjs/toolkit';

import { StateOfScale } from '@/utils/types/scale';
import { getScaleOfWasserman } from './thunks';

const initialState: StateOfScale = {
  isLoading: false,
  payload: {
    val_1: null,
    val_2: null,
    val_3: null,
    val_4: null,
    val_5: null,
    val_6: null,
    val_7: null,
    val_8: null,
    val_9: null,
    val_10: null,
    val_11: null,
    val_12: null,
    val_13: null,
    val_14: null,
    val_15: null,
    val_16: null,
    val_17: null,
    val_18: null,
    val_19: null,
    val_20: null,
    val_21: null,
  },
};

const scaleOfWasserman = createSlice({
  name: 'scaleOfWasserman',
  initialState,
  reducers: {
    setScaleOfWassermanValue(state, { payload }) {
      state.payload = { ...state.payload, ...payload };
    },
    resetScaleOfWasserman() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getScaleOfWasserman.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getScaleOfWasserman.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getScaleOfWasserman.fulfilled, (state, { payload }) => {
        if (payload) {
          state.payload = payload;
        }
        state.isLoading = false;
      });
  },
});

export const { setScaleOfWassermanValue, resetScaleOfWasserman } =
  scaleOfWasserman.actions;

export default scaleOfWasserman.reducer;
