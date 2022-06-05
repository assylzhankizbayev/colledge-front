export interface IFile {
  catalog_id: string;
  created_at: string;
  id: number;
  name: string;
  path: string;
  size: number;
  type: string;
  updated_at: string;
}

export interface IAllFiles {
  success: boolean;
  result: IFile[];
}
