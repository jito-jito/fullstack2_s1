import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { CategoryRepository, shootGamesData } from '../domain/categories.domain';
import { BehaviorSubject, of } from 'rxjs';
import { GetCategoryData } from '../aplication/getCategoryData';
import { CategoryRepositoryImpl } from '../infraestructure/category-repository-impl.service';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let paramsSubject = new BehaviorSubject({ category: 'disparos' });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CategoriesComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            params: paramsSubject.asObservable()
          }
        }
      ]
    })
    .overrideComponent(CategoriesComponent, {
      set: {
        providers: [
          { provide: CategoryRepository, useClass: CategoryRepositoryImpl },
          GetCategoryData
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load category data on init', () => {
    spyOn(CategoryRepositoryImpl.prototype, 'getCategoryData').and.callThrough();
    component.ngOnInit();

    expect(CategoryRepositoryImpl.prototype.getCategoryData).toHaveBeenCalledWith('disparos');
    component.loadCategoryData('disparos');

    expect(component.categoryData).toEqual(shootGamesData);
  });

  it('should show an error message when category data fails to load', () => {
    paramsSubject.next({ category: 'invalid-category' });
    fixture.detectChanges();
    
    spyOn(CategoryRepositoryImpl.prototype, 'getCategoryData').and.returnValue(of(null as any));
    const nativeElement = fixture.nativeElement;
    const errorTitleMessage = nativeElement.querySelector('h2');
    const errorTextMessage = nativeElement.querySelector('p');


    component.loadCategoryData('invalid-category' as any);

    expect(component.categoryData).toBeNull();
    expect(component.error).toBeTrue();
    expect(errorTitleMessage.textContent).toEqual('Página no encontrada');
    expect(errorTextMessage.textContent).toEqual('Lo sentimos, la página que buscas no existe. 🥹');
  });
});
