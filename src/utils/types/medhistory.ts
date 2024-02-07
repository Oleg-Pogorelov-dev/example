export type ReabilitationStatus = {
  protocolId: string;
  empFio: string;
  empPost: string;
  signDt: Date;
  scales: string[];
  icf: string[];
  descriptions: string[];
  recomendations: string[];
};
