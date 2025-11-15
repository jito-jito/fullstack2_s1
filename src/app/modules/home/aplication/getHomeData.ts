import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HomeData, HomeRepository } from "../domain/home.domain";


@Injectable()

export class GetHomeData {
    constructor(
        private homeRepository: HomeRepository
    ) {}
    
    execute(): Observable<HomeData> {
        return this.homeRepository.getHomeData()
    }
}