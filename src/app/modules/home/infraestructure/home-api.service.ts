import { Injectable } from '@angular/core';
import { homeData, HomeRepository } from '../domain/home.domain';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService implements HomeRepository {

  constructor() { }

  getHomeData() {
    return of(homeData);
  }
}
