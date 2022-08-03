import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeFrontEnd';
  loggedin=false
  constructor(private loginservice:LoginService ,private router: Router)
{
  this.loggedin=this.loginservice.isUserLoggedIn()

}
ngOnInit(): void {
if(this.loginservice.isUserLoggedIn())
{
  console.log(this.loginservice.isUserLoggedIn())
  this.loggedin=this.loginservice.isUserLoggedIn()
}

}
logout()
{

  this.loginservice.logOut()
  location.reload()

}
}
