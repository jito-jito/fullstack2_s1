import { Injectable } from '@angular/core';
import { CategoryRepository, sportGamesData } from '../domain/categories.domain';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportGamesApiService implements CategoryRepository {

  constructor() { }

  getCategoryData(categoryId: string) {
    if (categoryId.toLowerCase() !== 'deportes') {
      throw new Error('Category not found');
    }

    return of(sportGamesData);
  }
}
