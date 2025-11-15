import { Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/presentation/layout.component';
import { HomeComponent } from './modules/home/presentation/home.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent() {
                    return import('./modules/home/presentation/home.component').then(m => m.HomeComponent);
                }
            },
            {
                path: 'contacto',
                loadComponent() {
                    return import('./modules/contact/presentation/contact.component').then(m => m.ContactComponent);
                }
            },
            {
                path: ':category',
                loadComponent() {
                    return import('./modules/categories/presentation/categories.component').then(m => m.CategoriesComponent);
                }
            }
        ],
    }
];
