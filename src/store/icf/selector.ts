import { RootState } from '../store';

export const icfIsLoadSelector = (state: RootState) => state.icf.isLoading;

export const icfCodesSelector = (state: RootState) => state.icf.icfCodes;

export const icfCodesChildrenSelector = (state: RootState) =>
  state.icf.icfCodesChilds;

export const icfQualifierSelector = (state: RootState) => state.icf.qualifiers;

export const icfSelectedCodeSelector = (state: RootState) =>
  state.icf.selectedCodes;

export const savedIcfSelector = (state: RootState) => state.icf.savedIcf;

export const searchedValuesSelector = (state: RootState) =>
  state.icf.searchedValues;

export const icfRecomendationSelector = (state: RootState) =>
  state.icf.recomendation;

export const icfDescriptionSelector = (state: RootState) =>
  state.icf.description;

export const icfIsChangedSelector = (state: RootState) => state.icf.isChanged;
