import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  addEmployee()
  {
    this.router.navigate(['/add-employee'])
  }
  private getEmployees()
  {
    this.employeeService.getEmployeesList().subscribe(
      data=>{this.employees=data;
      console.log("data fetched Successfully");
      },
      error=>
      {
        console.log("Failed to load data")
        console.log(error)
      }

    )
  }
  updateEmployee(id: number)
  {
    this.router.navigate(['update-employee',id]);
  }
  deleteEmployee(id: number)
  {
    this.router.navigate(['delete-employee',id])
  }

}
