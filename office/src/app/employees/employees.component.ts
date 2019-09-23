import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
	currentEmployees = [];
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm){
  	console.log(empForm.value);
  	this.currentEmployees.push(empForm.value);
  }

}