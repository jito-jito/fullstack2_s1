import { Component } from '@angular/core';
import { HomeData, HomeRepository } from '../domain/home.domain';
import { HomeApiService } from '../infraestructure/home-api.service';
import { GetHomeData } from '../aplication/getHomeData';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  providers: [
    { provide: HomeRepository, useClass: HomeApiService },
    GetHomeData
  ]
})
export class HomeComponent {
  homeData!: HomeData;

  constructor(private getHomeData: GetHomeData) {
  }

  ngOnInit(): void {
    this.getHomeData.execute().subscribe(data => {
      this.homeData = data;
    });
  }
}
