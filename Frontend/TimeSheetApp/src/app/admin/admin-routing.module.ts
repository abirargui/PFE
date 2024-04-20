import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ListesdesemployersComponent } from './listesdesemployers/listesdesemployers.component';
import { ListesdesProjetsComponent } from './listesdes-projets/listesdes-projets.component';

const routes: Routes = [{ path: '', component: AdminComponent ,


  children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'listesdesemployers',
      component: ListesdesemployersComponent,
    },
    {
      path: 'listesdes-projets',
      component: ListesdesProjetsComponent,
    },

  ]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
