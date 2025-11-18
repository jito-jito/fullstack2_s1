import { Observable } from "rxjs";

export interface GameItem {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

export interface CategoryData {
    name: string;
    games: GameItem[];
}


export abstract class CategoryRepository {
    abstract getCategoryData(categoryId: string): Observable<CategoryData>;
}


export const shootGamesData: CategoryData = {
    name: 'Disparos',
    games: [
        {
            id: '1',
            name: 'Fortnite',
            description: 'Sobrevive en un mundo lleno de acción y construye tu victoria',
            imageUrl: './img/fortnite.png'
        },
        {
            id: '2',
            name: 'Red Dead Redemption',
            description: 'Adéntrate en el salvaje oeste y vive una historia épica',
            imageUrl: './img/red.png'
        }
    ]
}

export const sportGamesData: CategoryData = {
    name: 'Deportes',
    games: [
        {
            id: '1',
            name: 'FIFA 23',
            description: 'Disfruta del fútbol más realista y competitivo',
            imageUrl: './img/fifa.png'
        },
        {
            id: '2',
            name: 'Tenis',
            description: 'Disfruta de la emoción del tenis con este increíble juego',
            imageUrl: './img/tenis.png'
        }
    ]
}

export const adventureGamesData: CategoryData = {
    name: 'Aventura',
    games: [
        {
            id: '1',
            name: 'Zelda',
            description: 'Exploración y aventuras en el reino de Hyrule',
            imageUrl: './img/zelda.png'
        },
        {
            id: '2',
            name: 'God of War',
            description: 'Vive una épica aventura en la mitología nórdica',
            imageUrl: './img/god.png'
        },
        {
            id: '3',
            name: 'Super Mario Odyssey',
            description: 'Acompaña a Mario en una aventura por diversos mundos para rescatar a la Princesa Peach',
            imageUrl: './img/mario.png'
        }
    ]
}