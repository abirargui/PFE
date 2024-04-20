import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ListesdesemployersComponent } from './listesdesemployers/listesdesemployers.component';
import { ListesdesProjetsComponent } from './listesdes-projets/listesdes-projets.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    HomeComponent,
    ListesdesemployersComponent,
    ListesdesProjetsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
 
  ]
})
export class AdminModule { }
