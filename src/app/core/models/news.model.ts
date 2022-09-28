export interface INewsList {
  result: INews[];
  success: boolean;
}

export interface INewsById {
  result: INews;
  success: boolean;
}

export interface INews {
  author: string;
  body: string;
  created_at: string;
  file_id: string;
  id: number;
  tags: string;
  title: string;
  updated_at: string;
}

export interface INewsDelete {
  error: any;
  success: boolean;
}
