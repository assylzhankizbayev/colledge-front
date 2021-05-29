export interface IResearch {
  id: number;
  name: string;
  industrieId: number;
  labId: number;
  miniResearchIds: string;
  desc?: string;
  hide?: boolean;
}

export interface IMiniResearch {
  id: number;
  name: string;
  done: number;
  desc: string;
  gallery: string;
  equipmentIds: string;
  expertIds: string;
  labIds: string;
  researchId: number;
  minPrice: number;
}