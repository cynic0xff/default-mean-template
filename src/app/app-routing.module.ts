import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamesComponent } from './names/names.component';
import { NameAddComponent } from './name-add/name-add.component';
import { NameEditComponent } from './name-edit/name-edit.component';
import { NameDetailComponent } from './name-detail/name-detail.component';

const routes: Routes = [
  {
    path: 'names',
    component: NamesComponent,
    data: { title: 'List of names' } 
  },
  {
    path: 'name-detail/:id',
    component: NameDetailComponent,
    data: { title: 'Name details'}
  },
  {
    path: 'name-add',
    component: NameAddComponent,
    data: { title: 'Add name'}
  },
  {
    path: 'name-edit/:id',
    component: NameEditComponent,
    data: { title: 'Add details'}
  },
  {
    path: '',
    redirectTo: '/names',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
