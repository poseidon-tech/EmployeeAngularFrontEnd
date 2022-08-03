import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from '../models/auth-request';
import { Employee } from '../models/employee';
import { AuthResponse } from '../models/auth-response';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private base_url ="http://localhost:5000"
  constructor(private httpClient: HttpClient) 
  { }
  
  public generateToken(authreq:AuthRequest) 
  {
    return this.httpClient.post<AuthResponse>(this.base_url+"/authenticate",authreq);   
  }  
  getEmployeesList(): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(this.base_url);
  }
  getEmployeeById(id: number): Observable<Employee>
  {
    return this.httpClient.get<Employee>(this.base_url+"/"+id);
  }
  createEmployee(employee: Employee):Observable<Object>
  {
    return this.httpClient.post(this.base_url,employee);
  }
  updateEmployeeById(id: number,employee: Employee):Observable<Object>
  {
    return this.httpClient.put(this.base_url+"/"+id,employee);
  }
  deleteEmployeeById(id: number):Observable<Object>
  {
    return this.httpClient.delete(this.base_url+"/"+id);
  }
}
