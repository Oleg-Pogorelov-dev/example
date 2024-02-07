import { createSlice } from '@reduxjs/toolkit';

import { StateOfScale } from '@/utils/types/scale';
import { getHospitalDysphagiaScale } from './thunks';

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
  },
};

const hospitalDysphagiaScale = createSlice({
  name: 'hospitalDysphagiaScale',
  initialState,
  reducers: {
    setHospitalDysphagiaScaleValue(state, { payload }) {
      state.payload = { ...state.payload, ...payload };
    },
    resetHospitalDysphagiaScale() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHospitalDysphagiaScale.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHospitalDysphagiaScale.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getHospitalDysphagiaScale.fulfilled, (state, { payload }) => {
        if (payload) {
          state.payload = payload;
        }
        state.isLoading = false;
      });
  },
});

export const { setHospitalDysphagiaScaleValue, resetHospitalDysphagiaScale } =
  hospitalDysphagiaScale.actions;

export default hospitalDysphagiaScale.reducer;
