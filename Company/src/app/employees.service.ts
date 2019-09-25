import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  uri = 'http://10.90.90.117:4000/employees';

  constructor(private http: HttpClient) { }

  addEmployee(EmployeeName, EmployeeDesignation, EmployeeAddress) {
    const obj = {
      EmployeeName,
      EmployeeDesignation,
      EmployeeAddress
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
	getEmployees() {
    	return this
           .http
           .get(`${this.uri}`);
  	}

  	editEmployee(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updateEmployee(EmployeeName, EmployeeDesignation, EmployeeAddress, id) {
    	const obj = {
    		EmployeeName,
    		EmployeeDesignation,
    		EmployeeAddress
    	};
    	this
    	.http
    	.post(`${this.uri}/update/${id}`, obj)
    	.subscribe(res => console.log('Done'));
    }

    deleteEmployee(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}