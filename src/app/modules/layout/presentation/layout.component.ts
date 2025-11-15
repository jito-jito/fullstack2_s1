import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, NavigationEnd, Router } from '@angular/router';
import { LayoutData, LayoutRepository, MenuItem } from '../domain/layout.domain';
import { LayoutApiService } from '../infraestructure/layout-api.service';
import { GetMenuData } from '../aplication/getMenuData';
import { GetLayoutData } from '../aplication/getLayoutData';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: LayoutRepository, useClass: LayoutApiService },
    GetMenuData,
    GetLayoutData
  ]
})
export class LayoutComponent {
  layoutContent!: LayoutData
  menuItems!: MenuItem[]
  showBanner: boolean = true;

  constructor(
    private getMenuData: GetMenuData,
    private getLayoutData: GetLayoutData,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMenuData.execute().subscribe(menuItems => {
      this.menuItems = menuItems;
    });

    this.getLayoutData.execute().subscribe(layoutContent => {
      this.layoutContent = layoutContent;
    });

    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => this.showBanner = this.shouldShowBanner(event.url))
    ).subscribe();

  }

  shouldShowBanner(url: string): boolean {
    return url === '/'; 
  }
}
