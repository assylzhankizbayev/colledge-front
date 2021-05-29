export interface IEquipment {
  "id": number;
  "name": string;
  "desc": string;
  "specifications":
  { "name": string; "desc": string }[];
  "labIds": string;
  "researchIds": string;
  "gallery": string;
  "miniResearchIds": string;
}