import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  angForm: FormGroup;
  employee: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: EmployeesService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      EmployeeName: ['', Validators.required ],
      EmployeeDesignation: ['', Validators.required ],
      EmployeeAddress: ['', Validators.required ]
    });
  }

  updateEmployee(EmployeeName, EmployeeDesignation, EmployeeAddress, id) {
    this.route.params.subscribe(params => {
      this.ps.updateEmployee(EmployeeName, EmployeeDesignation, EmployeeAddress, params.id);
      this.router.navigate(['employees']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editEmployee(params['id']).subscribe(res => {
          this.employee = res;
      });
    });
  }
}