export type Value = {
  title: string;
  value: number | string;
};

export type Scale = {
  id?: string;
  name: string;
  values?: Value[];
};

export interface ScaleData {
  [key: string]: null | number;
}

export interface StateOfScale {
  isLoading: boolean;
  payload: ScaleData;
}

export interface ScaleScoreData {
  wasserman_score: null | number;
  kim_score: null | number;
  dysarthria_score: null | number;
}

export interface ScaleScore {
  isLoading: boolean;
  data: ScaleScoreData;
}

export interface ScalePostData {
  dysarthria?: ScaleData;
  emp_id: string;
  kim?: ScaleData;
  protocol_id: string;
  ehr_case_id?: string;
  wasserman?: ScaleData;
}
