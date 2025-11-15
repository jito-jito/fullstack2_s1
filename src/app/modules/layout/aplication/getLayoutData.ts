import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LayoutData, LayoutRepository } from "../domain/layout.domain";


@Injectable()

export class GetLayoutData {
    constructor(
        private layoutRepository: LayoutRepository
    ) {}
    
    execute(): Observable<LayoutData> {
        return this.layoutRepository.getLayoutData()
    }
}