import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AccueilComponent } from './components/accueil/accueil.component';

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
    path:'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
 
  {
    path:'', redirectTo: 'home', pathMatch:'full'
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
