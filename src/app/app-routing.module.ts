import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"employees",component:EmployeeListComponent,canActivate:[AuthGuard]},
  {path:"add-employee",component:AddEmployeeComponent,canActivate:[AuthGuard]},
  // {path:"",redirectTo:"employees",pathMatch:'full'},
  {path:"update-employee/:id",component:UpdateEmployeeComponent,canActivate:[AuthGuard]},
  {path:"delete-employee/:id",component:DeleteEmployeeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
