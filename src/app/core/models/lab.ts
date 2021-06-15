import { IExpert } from "./expert";

export interface ILab {
    "id": number;
    "name": string;
    "desc": string;
    "researchIds": string;
    "miniResearchIds": string;
    "equipmentIds": string;
    "expertIds": string;
}
export interface ILabExperts extends ILab {
    experts: IExpert[];
}