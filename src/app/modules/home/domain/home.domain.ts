import { Observable } from "rxjs";

export interface HomeData {
    homeTitle: string;
    categories: Category[];
}

export interface Category {
    name: string;
    route: string;
    imageUrl: string;
}

export abstract class HomeRepository {
    abstract getHomeData(): Observable<HomeData>;
}



export const homeData: HomeData = {
    homeTitle: 'CATEGORIAS',
    categories: [
        { 
            name: 'Aventura', 
            route: '/aventura',
            imageUrl: './img/categoria_aventura.png' 
        },
        { 
            name: 'Deportes', 
            route: '/deportes',
            imageUrl: './img/categoria_deporte.png' 
        },
        { 
            name: 'Disparos', 
            route: '/disparos',
            imageUrl: './img/categoria_disparos.png' 
        },
    ]
}