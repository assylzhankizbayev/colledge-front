import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadcumbRoute } from '../../../core/models/route.model';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';
import { CategoryFacade } from '../../../core/facade/category.facade';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories$ = this.categoryFacade.categories;
  isFormToggled = false;
  displayedColumns: string[] = ['title', 'description', 'controls'];
  titleLink = ['/admin', 'category', 'id', 'items'];
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Категории', route: '/admin/category' },
  ];

  constructor(
    private router: Router,
    private categoryFacade: CategoryFacade,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.categoryFacade.initCategories();
  }

  addCategory(data: any): void {
    this.categoryFacade.addCategory(data).subscribe();
  }

  editCategory(id: number) {
    this.router.navigate(['/admin/category', id, 'edit']);
  }

  deleteCategory(id: number) {
    this.categoryFacade.deleteCategory(id).subscribe();
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }
}
