import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee=new Employee();
  constructor(private employeeService: EmployeeService,private router: Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data=>{this.employee=data}
      
    )
    console.log(this.employee)
    
  }
  onSubmit()
  {
    console.log(this.employee);
    this.updateEmployee();
  }
  onCancel()
  {
    console.log("error")
    this.router.navigate(['/employees']);
  }
  updateEmployee()
  {
   this.employeeService.updateEmployeeById(this.id,this.employee).subscribe(
   data=>{
    console.log("updation succes:") 
    console.log(data);
    this.router.navigate(["/employees"])},
   error=>{
    console.log("update Failed") 
    console.log(error)}
   )
  }

}
