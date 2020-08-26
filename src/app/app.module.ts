import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PowerBIModule } from 'angular2-powerbi';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PowerbiComponent } from './login/powerbi/powerbi.component';
const appRoutes: Routes = [
  // { path: '', component: AppComponent},
  {path:'login',component: LoginComponent,children:[
    { path: 'powerbi', component: PowerbiComponent} 
  ]}
  
]
@NgModule({
  declarations: [
    AppComponent,
    PowerbiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    PowerBIModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
