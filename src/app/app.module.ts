import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PowerBIModule } from 'angular2-powerbi';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PowerbiComponent } from './login/powerbi/powerbi.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule,MatTableModule,MatFormFieldModule,MatInputModule,
  MatButtonModule,MatCheckboxModule,MatIconModule, MatTabsModule} from '@angular/material';

const appRoutes: Routes = [
  // { path: '', component: AppComponent},
  {path:'login',component: LoginComponent,children:[
    { path: 'powerbi', component: PowerbiComponent} 
  ]},
  {path:'loginUser',component: LoginUserComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    PowerbiComponent,
    LoginComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    PowerBIModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
