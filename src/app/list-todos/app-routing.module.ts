import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ListTodosComponent } from './list-todos.component';

const routes: Routes = [
  { path: 'list', 
    children: [
      { path: '', component: ListTodosComponent}, 
      {path: ':id', component: NewComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
