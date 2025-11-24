import { Component, ViewEncapsulation } from '@angular/core';
import { GetCategoryData } from '../aplication/getCategoryData';
import { CategoryData, CategoryId, CategoryRepository } from '../domain/categories.domain';
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
  categoryData!: CategoryData | null;
  error: boolean = false;

  constructor(
    private getCategoryData: GetCategoryData,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.error = false;

    this.route.params.subscribe(params => {
      this.loadCategoryData(params['category']);
    });
  }


  loadCategoryData(category: CategoryId) {
    this.getCategoryData.execute(category).subscribe(data => {
      
      if(!data) {
        this.error = true;
        this.categoryData = null;
        return;
      }

      this.categoryData = data;
    });
  }
}
