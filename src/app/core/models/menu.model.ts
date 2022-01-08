export interface IMenuItemRes {
  success: boolean;
  result: IMenuItem[];
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
  subMenu?: any[];
}

