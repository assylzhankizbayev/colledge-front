import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  titleLink = ['/category', 'id', 'items'];

  constructor(private router: Router, private categoryFacade: CategoryFacade) {}

  ngOnInit(): void {
    this.categoryFacade.initCategories();
  }

  addCategory(data: any): void {
    this.categoryFacade.addCategory(data).subscribe();
  }

  editCategory(id: number) {
    this.router.navigate(['/category', id, 'edit']);
  }

  deleteCategory(id: number) {
    this.categoryFacade.deleteCategory(id).subscribe();
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }
}
