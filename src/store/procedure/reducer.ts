import { createSlice } from '@reduxjs/toolkit';

import { getAssignmentProcedure, postProcedures } from './thunks';
import { Procedure } from '@/utils/types/procedure';
import { message } from '@/utils/message';

const initialState: Procedure = {
  isLoading: false,
  data: {
    dates: [
      {
        date: '',
        states: [],
      },
    ],
    name: '',
  },
  postData: {
    states: [],
  },
};

const procedure = createSlice({
  name: 'procedure',
  initialState,
  reducers: {
    setProcedure(state, { payload }) {
      if (state.postData.states.some((item) => item.cuid === payload.cuid)) {
        state.postData.states = state.postData.states.map((obj) =>
          obj.cuid === payload.cuid ? payload : obj
        );
      } else {
        state.postData.states.push(payload);
      }
    },
    resetProcedure() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAssignmentProcedure.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssignmentProcedure.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAssignmentProcedure.fulfilled, (state, { payload }) => {
        state.data = { ...payload };
        state.isLoading = false;
      })
      .addCase(postProcedures.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProcedures.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postProcedures.fulfilled, (state) => {
        message({
          title: 'Данные процедур успешно сохранены',
          type: 'info',
        });
        state.isLoading = false;
      });
  },
});

export const { resetProcedure, setProcedure } = procedure.actions;

export default procedure.reducer;
