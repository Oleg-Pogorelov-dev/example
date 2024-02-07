import { createSlice } from '@reduxjs/toolkit';

import { message } from '@/utils/message';
import {
  IcfCode,
  IcfCodesChilds,
  Qualifier,
  SavedIcf,
  SelectedCode,
} from '@/utils/types/icf';
import {
  getIcf,
  getIcfCodes,
  getIcfQualifier,
  postIcf,
  searchIcf,
} from './thunks';

export interface Icf {
  isLoading: boolean;
  icfCodes: IcfCode[];
  icfCodesChilds: IcfCodesChilds;
  qualifiers: Qualifier[];
  selectedCodes: SelectedCode[];
  savedIcf: SavedIcf[];
  searchedValues: IcfCode[];
  description: string;
  recomendation: string;
  isChanged: boolean;
}

const initialState: Icf = {
  isLoading: false,
  icfCodes: [],
  icfCodesChilds: {},
  qualifiers: [],
  selectedCodes: [
    {
      group: '',
      category: '',
      code: '',
      value: '',
      qualifierQuantity: 0,
      qualifiers: {},
    },
  ],
  savedIcf: [],
  searchedValues: [],
  description: '',
  recomendation: '',
  isChanged: false,
};

export const icf = createSlice({
  name: 'icf',
  initialState,
  reducers: {
    setIcfDescription(state, { payload }) {
      state.description = payload;
      state.isChanged = true;
    },
    setIcfRecomendation(state, { payload }) {
      state.recomendation = payload;
      state.isChanged = true;
    },
    setIcfCode(state, { payload }) {
      state.selectedCodes[payload.id] = {
        group: payload.code[0],
        category: payload.category,
        code: payload.code,
        value: payload.value,
        qualifierQuantity: payload.qualifierQuantity,
        qualifiers: {},
      };
      state.isChanged = true;
    },
    createNewFactorField(state) {
      state.selectedCodes.push({
        group: '',
        category: '',
        code: '',
        value: '',
        qualifierQuantity: 0,
        qualifiers: {},
      });
    },
    setQualifier(state, { payload }) {
      state.selectedCodes[payload.id].qualifiers = {
        ...JSON.parse(JSON.stringify(state.selectedCodes[payload.id]))
          .qualifiers,
        [payload.num]: {
          code: payload.code,
          value: payload.value,
          type: payload.type,
        },
      };
    },
    resetIcfCodes(state) {
      state.icfCodes = [];
      state.icfCodesChilds = {};
      state.qualifiers = [];
      state.searchedValues = [];
    },
    resetSelected(state) {
      state.selectedCodes = [
        {
          group: '',
          category: '',
          code: '',
          value: '',
          qualifierQuantity: 0,
          qualifiers: {},
        },
      ];
    },
    resetSavedIcf(state) {
      state.savedIcf = [];
    },
    resetSearchedValues(state) {
      state.searchedValues = [];
    },
    resetText(state) {
      state.description = '';
      state.recomendation = '';
      state.isChanged = false;
    },
    removeSavedIcf(state, { payload }) {
      state.savedIcf = [...state.savedIcf].filter(
        (item) =>
          item.categoryMkf +
            item.qualifierCode1 +
            item.qualifierCode2 +
            item.qualifierCode3 +
            item.qualifierCode4 !==
          payload
      );

      state.isChanged = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIcfCodes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIcfCodes.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getIcfCodes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (!payload[0]?.parentId) {
          state.icfCodes = payload;
        } else {
          if (!state.icfCodesChilds[payload[0].parentId]) {
            state.icfCodesChilds[payload[0].parentId] = [];
          }
          state.icfCodesChilds[payload[0].parentId] = payload;
        }
      })
      .addCase(getIcfQualifier.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIcfQualifier.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getIcfQualifier.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.qualifiers = payload;
      })
      .addCase(postIcf.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postIcf.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postIcf.fulfilled, (state) => {
        state.isLoading = false;
        message({
          title: 'Данные МКФ успешно сохранены',
          type: 'info',
        });
      })
      .addCase(getIcf.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIcf.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getIcf.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.savedIcf = payload.mkf || [];
        state.description = payload.description || '';
        state.recomendation = payload.recomendation || '';
      })
      .addCase(searchIcf.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchIcf.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(searchIcf.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.searchedValues = payload || [];
      });
  },
});

export const {
  resetIcfCodes,
  setIcfCode,
  setQualifier,
  resetSelected,
  resetSavedIcf,
  createNewFactorField,
  resetSearchedValues,
  setIcfDescription,
  setIcfRecomendation,
  removeSavedIcf,
  resetText,
} = icf.actions;
export default icf.reducer;
