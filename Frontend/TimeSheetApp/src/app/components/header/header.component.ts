import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Projects',
        icon: 'pi pi-folder',
        routerLink: '/projects'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact'
      },
      {
        label: 'login',
        icon: 'pi pi-sign-in',
        routerLink: '/login,'
      },
      {
        label: 'register',
        icon: 'pi pi-user',
        routerLink: '/register'
      }

      
    ];
  }
}