import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  formData : Employee;
  employeeList : Employee[];
  readonly rootUrl = "http://localhost:21880/api";

  constructor(private http: HttpClient) { }

  postEmployee(formData : Employee){
      return this.http.post(this.rootUrl+'/Employees/PostEmployee',formData);
  }
  refreshList(){
    this.http.get(this.rootUrl+'/employees').toPromise().then(res=> this.employeeList = res as Employee[]);
  }
  putEmployee(formData : Employee){
    return this.http.put(this.rootUrl+'/Employees/'+formData.Id,formData);
  }
  deleteEmployee(id: number){
    return this.http.delete(this.rootUrl+'/Employees/'+id);
  }
}
