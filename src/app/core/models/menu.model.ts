export interface IMenuItemRes {
  success: boolean;
  result: IMenuItemF[] | IMenuItem[];
}

export interface IMenuItemF {
  id: number;
  title: string;
  route: string;
  articleId: number;
  orderIdx: number;
  parentMenuId: number;
  parentMenuItemId: number;
}

export interface IMenuItem {
  id: number;
  title: string;
  route: string;
  article_id: number;
  order_idx: number;
  parent_menu_id: number;
  parent_menu_item_id: number;
}

export interface IMenu {
  id?: number;
  title: string;
  route: string;
  articleId?: number;
  subMenu?: any[];
}

export interface IMenuParent {
  id: number;
  description: string;
  slug: string;
  title: string;
}

export interface IMenuResponse<T> {
  success: boolean;
  result: T;
}

export enum MenuIds {
  Sidebar = 2,
  Gallery = 8
}
