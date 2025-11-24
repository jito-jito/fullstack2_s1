import { Injectable } from "@angular/core";
import { CategoryData, CategoryId, CategoryRepository } from "../domain/categories.domain";
import { GameFactoryService } from "./game-factory.service";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoryRepositoryImpl implements CategoryRepository {
    constructor(private gameFactory: GameFactoryService) { }

    getCategoryData(categoryId: CategoryId): Observable<CategoryData | null> {
        try {
            const service = this.gameFactory.getCategoryService(categoryId);
            const categoryData = service.getCategoryData(categoryId);
            
            return categoryData;

        } catch (error) {
            return of(null);
        }
    }
}