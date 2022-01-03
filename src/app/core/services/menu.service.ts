import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ENV } from "../../app.token";
import { IEnvironment } from "../models/environments.model";
import { IMenuItemRes } from "../models/menu.model";

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment,
  ) {}

  getMenuItemsById(id: number): Observable<IMenuItemRes> {
    return this.http.get<IMenuItemRes>(this.env.host + `/menu/${id}/item`);
  }
}