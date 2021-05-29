import { IResearch } from "src/app/core/models/research";

export interface IMenu {
  id: number;
  name: string;
  router: string;
  isClick?: boolean;
}

export interface IIndustry {
  id: number;
  name: string;
}

export interface IIndustryEx extends IIndustry {
  research: IResearch[];
  hide?: boolean;
}