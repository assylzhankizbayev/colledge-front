import { IFile } from "./files.model";

export interface IPost {
  author: string;
  body: string;
  created_at: string;
  file_id: string;
  files: IFile;
  id: number;
  tags: string;
  title: string;
  updated_at: string;
}

export interface IPostRes {
  result?: IPost[];
  success: boolean;
  error?: any;
}

export interface IPostSingleRes {
  result?: IPost;
  success: boolean;
  error?: any;
}
