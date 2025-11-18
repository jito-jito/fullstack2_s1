import { Injectable } from '@angular/core';
import { CategoryRepository, shootGamesData } from '../domain/categories.domain';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShootGamesApiService implements CategoryRepository {

  constructor() { }

  getCategoryData(categoryId: string) {
    if (categoryId.toLowerCase() !== 'disparos') {
      throw new Error('Category not found');
    }

    return of(shootGamesData);
  }
}
