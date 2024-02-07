export interface Survey {
  isLoading: boolean;
  protocolId: string;
  nazName: string;
  nazCode: string;
  additionally: string;
  durationMinutes: number | null;
  durationHours: number | null;
}
