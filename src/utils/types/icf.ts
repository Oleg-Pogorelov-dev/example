export type IcfCode = {
  id: string;
  parentId: string;
  code: string;
  value: string;
  selectable: boolean;
  haveChild: boolean;
  description: string;
  complexInfo: {
    value: string;
    qualifierType1: string;
    qualifierType2: string;
    qualifierType3: string;
    qualifierType4: string;
    qualifierQuantity: number;
    category: string;
  };
  sortOrder: number;
};

export type IcfCodesChilds = {
  [key: string]: IcfCode[];
};

export type Qualifier = {
  id: string;
  parentId: string;
  code: string;
  value: string;
  termName: string;
};

export type SelectedQualifier = {
  [num: number]: { code: string; value: string; type: string };
};

export type SavedIcf = {
  categoryMkf: string;
  codeMkfCode: string;
  codeMkfValue: string;
  qualifierCode1: string | null;
  qualifierValue1: string | null;
  qualifierType1: string | null;
  qualifierCode2?: string | null;
  qualifierValue2?: string | null;
  qualifierType2?: string | null;
  qualifierCode3?: string | null;
  qualifierValue3?: string | null;
  qualifierType3?: string | null;
  qualifierCode4?: string | null;
  qualifierValue4?: string | null;
  qualifierType4?: string | null;
};

export type SelectedCode = {
  group: string;
  category: string;
  code: string;
  value: string;
  qualifierQuantity: number;
  qualifiers: SelectedQualifier;
};

export type SavedCodesPostData = {
  protocolId: string;
  ehrCaseId?: string;
  nazCode?: string;
  mkf: SavedIcf[];
};
