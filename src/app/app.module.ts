import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './service/login.service';
import { AuthGuard } from './service/auth.guard';
import { AuthInterceptor } from './service/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [AuthGuard,LoginService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
