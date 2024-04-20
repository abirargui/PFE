import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';

import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  
  {
    path:'register',
    component: RegisterComponent
  },
  
 
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'accueil',
    component: AccueilComponent
  },
  {
    path:'projects',
    component: ProjetsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
   
  },
 
  {
    path:'', redirectTo: 'accueil', pathMatch:'full'
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
