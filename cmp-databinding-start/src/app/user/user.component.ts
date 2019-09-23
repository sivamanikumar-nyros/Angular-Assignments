import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userElements = [];
  usersFirstName = '';
  usersLastName = '';
  usersEmail = '';
  usersPassword = '';

  onSubmit(){
    this.userElements.push({
      type: 'userserver',
      firstName: this.usersFirstName,
      lastName: this.usersLastName,
      Email: this.usersEmail,
      Password: this.usersPassword
    });
  console.log(this.userElements);
  }
}