import { Component, ViewEncapsulation } from '@angular/core';
import { GetCategoryData } from '../aplication/getCategoryData';
import { CategoryData, CategoryRepository } from '../domain/categories.domain';
import { CategoryRepositoryImpl } from '../infraestructure/category-repository-impl.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: CategoryRepository, useClass: CategoryRepositoryImpl },
    GetCategoryData
  ]
})
export class CategoriesComponent {
  categoryData!: CategoryData

  constructor(
    private getCategoryData: GetCategoryData,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadCategoryData(params['category']);
    });
  }


  loadCategoryData(category: string) {
    this.getCategoryData.execute(category).subscribe(data => {
      this.categoryData = data;
    });
  }
}
