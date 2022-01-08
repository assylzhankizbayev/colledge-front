export interface IArticlePostsRes {
  success: boolean;
  result: IArticle[];
}

export interface IArticle {
  id: number
  title: string;
  slug: string;
  body: string;
  file_id: number;
  category_item_id: number;
  author: string;
  tags: string;
  created_at: string
  updated_at: string;
}
