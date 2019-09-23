import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

	// message: string = new Date().toDateString();
	dateMessage: string;

  constructor() {

  	setInterval(()=>{

  	let currrentDate = new Date();
  	this.dateMessage = currrentDate.toDateString() + " " + currrentDate.toLocaleTimeString();
  	} , 1000);
  }

  ngOnInit() {
  }

}
