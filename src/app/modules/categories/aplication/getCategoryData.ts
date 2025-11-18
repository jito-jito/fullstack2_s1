import { Injectable } from "@angular/core";
import { CategoryData, CategoryRepository } from "../domain/categories.domain";
import { Observable } from "rxjs";

@Injectable()

export class GetCategoryData {
    constructor(
        private categoryRepository: CategoryRepository
    ) {}
    
    execute(categoryId: string): Observable<CategoryData> {
        return this.categoryRepository.getCategoryData(categoryId);
    }
}