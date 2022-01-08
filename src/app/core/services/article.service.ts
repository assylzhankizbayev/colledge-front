import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ENV } from "../../app.token";
import { IArticlePostsRes } from "../models/article.model";
import { IEnvironment } from "../models/environments.model";

@Injectable({ providedIn: 'root' })
export class ArticleService {
  url = this.env.host + '/article';
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment,
  ) {}

  getArticlesByCategoryId(id: number): Observable<IArticlePostsRes> {
    return this.http.get<IArticlePostsRes>(this.url + `/category/${id}`);
  }
}
