export interface IFaq {
  id?: number;
  question: string;
  answer: string;
}

export interface IFaqRes {
  success: boolean;
  result: IFaq[];
  error?: any;
}

export interface IFaqItemRes {
  success: boolean;
  result: IFaq;
  error?: any;
}

export interface IFaqUpdate {
  success: boolean;
  error?: string;
}
