import { FILTERS_FROM_PANEL } from '../Static/common';

export type FiltersFromPanelLabel = keyof typeof FILTERS_FROM_PANEL;

export type FiltersFromPanel = {
  [name in FiltersFromPanelLabel]: string;
};
export type FilterColumnCheckbox = {
  title: string;
  key: string;
  checked: boolean;
};
