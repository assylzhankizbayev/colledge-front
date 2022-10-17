
export interface IGallery<T> {
  id: number;
  title: string;
  file: T;
}

export interface IGalleryResponse<T> {
  success: boolean;
  result?: T;
  error?: any;
}
