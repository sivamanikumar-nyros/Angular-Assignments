import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

	angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: EmployeesService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      EmployeeName: ['', Validators.required ],
      EmployeeDesignation: ['', Validators.required ],
      EmployeeAddress: ['', Validators.required ]
    });
  }

  addEmployee(EmployeeName, EmployeeDesignation, EmployeeAddress) {
    this.ps.addEmployee(EmployeeName, EmployeeDesignation, EmployeeAddress);
  }

  ngOnInit() {
  }

}