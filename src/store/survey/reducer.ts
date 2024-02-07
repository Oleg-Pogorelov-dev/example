import { createSlice } from '@reduxjs/toolkit';

import { Survey } from '@/utils/types/survey';
import { getAssignmentNaz } from './thunks';
import { postConsultation } from '../thunk';

const initialState: Survey = {
  isLoading: false,
  protocolId: '',
  nazName: '',
  nazCode: '',
  additionally: '',
  durationMinutes: null,
  durationHours: null,
};

export const survey = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    resetProtocolId(state) {
      state.protocolId = '';
    },
    resetAssigmentInfo(state) {
      state.durationMinutes = null;
      state.durationHours = null;
      state.additionally = '';
      state.nazName = '';
    },
  },
  extraReducers(builder) {
    builder.addCase(getAssignmentNaz.pending, () => {});
    builder.addCase(getAssignmentNaz.rejected, () => {});
    builder.addCase(getAssignmentNaz.fulfilled, (state, { payload }) => {
      state.nazName = payload.naz_name;
      state.nazCode = payload.naz_code;
      state.additionally = payload.additionally;
      state.durationMinutes = payload.duration_minutes;
      state.durationHours = payload.duration_hours;

      if (payload?.protocol_id) {
        state.protocolId = payload.protocol_id;
      }
    });
    builder.addCase(postConsultation.pending, () => {});
    builder.addCase(postConsultation.rejected, () => {});
    builder.addCase(postConsultation.fulfilled, (state, { payload }) => {
      if (payload) {
        state.protocolId = payload;
      }
    });
  },
});

export const { resetProtocolId, resetAssigmentInfo } = survey.actions;
export default survey.reducer;
