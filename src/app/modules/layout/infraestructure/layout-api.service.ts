import { Injectable } from '@angular/core';
import { appContent, LayoutRepository, menuData } from '../domain/layout.domain';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutApiService implements LayoutRepository {

  constructor() { }

  getMenuData() {
    return of(menuData.items);
  }

  getLayoutData() {
    return of(appContent);
  }
}
