import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRoutingModule } from './list-todos/app-routing.module';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ListRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
