import { Injectable } from '@angular/core';
import { CategoryRepository } from '../domain/categories.domain';
import { ShootGamesApiService } from './shoot-games-api.service';
import { SportGamesApiService } from './sport-games-api.service'
import { AdventureGamesApiService } from './adventure-games-api.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameFactoryService {

  constructor(
    private shootGamesApiService: ShootGamesApiService,
    private sportGamesApiService: SportGamesApiService,
    private adventureGamesApiService: AdventureGamesApiService
  ) { }

  createCategoryRepository(categoryCode: string): CategoryRepository {
    switch (categoryCode) {
      case 'disparos':
        return this.shootGamesApiService;
      case 'deportes':
        return this.sportGamesApiService;
      case 'aventura':
        return this.adventureGamesApiService;
      default:
        throw new Error(`Category "${categoryCode}" not found`);
    }
  }

  // Método alternativo para usar en el caso de uso
  getCategoryService(categoryCode: string): CategoryRepository {
    return this.createCategoryRepository(categoryCode);
  }
}
