import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { EmployeeService } from './services/employee.service';
import { DashboardService } from './services/dashboard.service';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    // EmployeeDataComponent,
    // DashboardServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    
    // ReactiveFormsModule,
    // LazyLoadModule
  ],
  providers: [AuthService,AuthGuard,EmployeeService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
