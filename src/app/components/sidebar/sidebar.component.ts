import {Component, OnInit} from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

/*Mappin Router to path*/
export const ROUTES: RouteInfo[] = [
    {path: '/dashboard', title: 'Dashboard', icon: 'content_paste', class: ''},
    {path: '/requerimiento', title: 'Requerimiento', icon: 'content_paste', class: ''},
    { path: '/licitacion', title: 'Licitacion', icon: 'unarchive', class: ''},


    {path: '/monitorrequerimiento', title: 'MonitorRequerimiento', icon: 'content_paste', class: ''},
    {path: '/probando', title: 'Lista de productos', icon: 'library_books', class: ''},
    {path: '/configProceso', title: 'Configuracion del proceso', icon: 'library_books', class: ''},

];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
