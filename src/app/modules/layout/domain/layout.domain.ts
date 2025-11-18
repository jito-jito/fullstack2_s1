import { Observable } from "rxjs";

export interface LayoutData {
    appName: string;
    heroTitle: string;
    footerText: string;
}

export interface MenuItem {
    label: string;
    route: string;
}

export abstract class LayoutRepository {
    abstract getMenuData(): Observable<MenuItem[]>;
    abstract getLayoutData(): Observable<LayoutData>;
}




export const appContent: LayoutData = {
    appName: 'NgDuoGames',
    heroTitle: 'LOS MEJORES JUEGOS PARA DISFRUTAR EN TU TIEMPO LIBRE',
    footerText: '© 2025 DuoGames. Todos los derechos reservados.'  
}

export const menuData: { items: MenuItem[] } = {
    items: [
        { label: 'Inicio', route: '/' },
        { label: 'Aventura', route: '/aventura' },
        { label: 'Deportes', route: '/deportes' },
        { label: 'Disparos', route: '/disparos' },
        { label: 'Contacto', route: '/contacto' },
    ],
}