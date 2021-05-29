export interface IExpert {
  id: number;
  name: string;
  position: string;
  experiense: string;
  researchList: { name: string; count: number }[];
  labIds: string;
  researchIds: string;
  miniResearchIds: string;
  equipmentIds: string;
  researchCount: number;
}