import { IFile } from "./files.model";

export interface IGallery<T> {
  id: number;
  title: string;
  file: T;
}

export type GalleryFile = IGallery<IFile>;

export interface IGalleryResponse<T> {
  success: boolean;
  result?: T;
  error?: any;
}
