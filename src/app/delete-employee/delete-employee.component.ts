import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
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
  onDelete()
  {
    this.employeeService.deleteEmployeeById(this.id).subscribe(
      data=>{
        console.log("delete operation success: object deleted:")
        console.log(data)
        this.router.navigate(["/employees"])
      },
      error=>{
        console.log("deletion failed")
        console.log(error)
      }

    )
    
  }
  onCancel()
  {
    this.router.navigate(["/employees"])
  }

}
