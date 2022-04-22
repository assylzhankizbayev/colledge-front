import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { ArticleService } from '../../../../core/services/article.service';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.scss'],
})
export class ArticlePostComponent implements OnInit {
  title: string | null = null;
  body: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const id = params.get('id');
          return id ? this.articleService.getArticleById(+id) : of(null);
        }),
        tap((res) => {
          if (res) {
            this.title = res.result.title;
            this.body = res.result.body;
          }
        })
      )
      .subscribe();
  }
}
