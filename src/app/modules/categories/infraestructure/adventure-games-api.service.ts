import { Injectable } from '@angular/core';
import { adventureGamesData, CategoryRepository } from '../domain/categories.domain';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdventureGamesApiService implements CategoryRepository {

  constructor() { }

  getCategoryData(categoryId: string) {
    if (categoryId.toLowerCase() !== 'aventura') {
      throw new Error('Category not found');
    }

    return of(adventureGamesData);
  }
}
