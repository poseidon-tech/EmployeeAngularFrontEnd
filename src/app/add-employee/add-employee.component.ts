import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee=new Employee();
  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.employee);
    console.log("rjlvkhjr")
    this.saveEmployee();
  }
  addEmployee()
  {
    this.router.navigate(['/add-employee'])
  }
  onCancel()
  {
    console.log("error")
    this.router.navigate(['/employees']);
  }
  saveEmployee()
  {
    this.employeeService.createEmployee(this.employee).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['/employees']);
      },
      error=>{console.log(error);}

    )
  }

}
