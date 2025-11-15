import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LayoutRepository, MenuItem } from "../domain/layout.domain";


@Injectable()

export class GetMenuData {
    constructor(
        private layoutRepository: LayoutRepository
    ) {}
    
    execute(): Observable<MenuItem[]> {
        return this.layoutRepository.getMenuData()
    }
}