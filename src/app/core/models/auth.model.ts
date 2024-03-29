export interface ILoginBody {
  phone: string;
  password: string;
}

export interface ILoginRes {
  accessToken: string;
  refreshToken: string;
}

export interface IUpdateTokenRes {
  accessToken: string;
}
