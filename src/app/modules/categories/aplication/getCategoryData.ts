import { Injectable } from "@angular/core";
import { CategoryData, CategoryId, CategoryRepository } from "../domain/categories.domain";
import { Observable } from "rxjs";

@Injectable()

export class GetCategoryData {
    constructor(
        private categoryRepository: CategoryRepository
    ) {}
    
    execute(categoryId: CategoryId): Observable<CategoryData | null> {
        return this.categoryRepository.getCategoryData(categoryId);
    }
}