import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CategoryFacade } from '../../../../core/facade/category.facade';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {
  categoryId: number | null = null;
  category$ = this.categoryFacade.category;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryFacade: CategoryFacade
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const categoryId = params.get('categoryId');
          this.categoryId = categoryId ? +categoryId : null;
          return this.categoryId
            ? this.categoryFacade.getCategory(this.categoryId)
            : of(null);
        })
      )
      .subscribe();
  }

  updateCategory(data: any) {
    if (this.categoryId) {
      this.categoryFacade.updateCategory(this.categoryId, data).subscribe();
    }
  }

  cancel() {
    this.router.navigate(['/admin/category']);
  }
}
