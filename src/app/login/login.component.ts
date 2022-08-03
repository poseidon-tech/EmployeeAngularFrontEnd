import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthRequest } from '../models/auth-request';
import { EmployeeService } from '../service/employee.service';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authreq :AuthRequest=new AuthRequest()

  constructor(private employeeService: EmployeeService,private router: Router ,private route: ActivatedRoute,private loginService: LoginService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.authreq);
    this.loginEmployee();
  }
  loginEmployee()
  {
    this.employeeService.generateToken(this.authreq).subscribe(
      response=> {

        console.log(response.jwt)
        this.loginService.login(response.jwt)
        //this.router.navigate(['/employees']) this won't reload page
        window.location.href="/employees" // this will reload the  page,used it to refresh navbar 
        
      },
      error => {
        window.alert("Invalid username or password")
        console.log(error);

      }
    )
  }

}
