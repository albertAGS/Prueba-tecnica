import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { NewComponent } from './list-todos/new/new.component';
import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './list-todos/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTodosComponent,
    NewComponent,
    LoginComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
