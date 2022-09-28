export enum Route {
  Admin = '/admin',
  ClientNews = '/page/news',
}

export interface IBreadcumbRoute {
  title: string;
  route: string | null;
}
