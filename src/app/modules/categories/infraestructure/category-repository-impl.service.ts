import { Injectable } from "@angular/core";
import { CategoryData, CategoryRepository } from "../domain/categories.domain";
import { GameFactoryService } from "./game-factory.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoryRepositoryImpl implements CategoryRepository {
    constructor(private gameFactory: GameFactoryService) {}
    
    getCategoryData(categoryId: string): Observable<CategoryData> {
        const service = this.gameFactory.getCategoryService(categoryId);
        return service.getCategoryData(categoryId);
    }
}