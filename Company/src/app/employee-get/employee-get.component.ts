import { Component, OnInit } from '@angular/core';
import Employee from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {

  employees: Employee[];
  constructor(private ps: EmployeesService) { }


deleteEmployee(id) {
    this.ps.deleteEmployee(id).subscribe(res => {
      this.employees.splice(id, 1);
    });
}

  ngOnInit() {
    this.ps
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
    });
  }

}