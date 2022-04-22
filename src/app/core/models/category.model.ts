export interface ICategoryRes {
  success: boolean;
  result?: ICategory;
}

export interface ICategoryRemoveRes {
  success: boolean;
  error: string;
}

export interface ICategory {
  title: string;
  slug: string;
  description: string;
}

export interface ICategoryItemRes {
  success: boolean;
  result: ICategoryItem[];
}
export interface ICategoryItem {
  id: number;
  order_idx: number;
  parent_category_id: number;
  parent_category_item_id: number;
  title: string;
}
