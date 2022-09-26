export interface INewsResponse {
  result: INews[];
  success: boolean;
}

export interface INews {
  author: string;
  body: string;
  created_at: string;
  file_id: string;
  id: number;
  tags: string
  title: string
  updated_at: string
}
