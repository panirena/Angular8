import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { MapsComponent } from './components/maps/maps.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'List of Teams' }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: { title: 'Team Details' }
  },
  {
    path: 'maps/:lat/:lng',
    component: MapsComponent,
    data: { title: 'Team Position' }
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
