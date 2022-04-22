import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ENV } from "../../app.token";
import { IArticlePostRes, IArticlePostsRes } from "../models/article.model";
import { IEnvironment } from "../models/environments.model";

@Injectable({ providedIn: 'root' })
export class ArticleService {
  url = this.env.host + '/article';

  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment,
  ) {}

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getArticle(id: number): Observable<any> {
    return this.http.get<any>(this.url + `/${id}`);
  }

  addArticle(data: any): Observable<{ success: boolean }> {
    const body = new FormData();

    Object.keys(data).forEach(key => {
      body.append(`${key}`, data[key]);
    });

    return this.http.post<{ success: boolean }>(this.url, body);
  }

  updateArticle(id: number, data: any): Observable<{ success: boolean }> {
    const body = new FormData();

    Object.keys(data).forEach(key => {
      body.append(`${key}`, data[key]);
    });

    return this.http.put<{ success: boolean }>(this.url + `/${id}`, body);
  }

  deleteArticle(id: number): Observable<{ success: boolean, error: string }> {
    return this.http.delete<{ success: boolean, error: string }>(this.url + `/${id}`);
  }

  getArticlesByCategoryId(id: number): Observable<IArticlePostsRes> {
    return this.http.get<IArticlePostsRes>(this.url + `/category/${id}`);
  }

  getArticleById(id: number): Observable<IArticlePostRes> {
    return this.http.get<IArticlePostRes>(this.url + `/${id}`);
  }
}
