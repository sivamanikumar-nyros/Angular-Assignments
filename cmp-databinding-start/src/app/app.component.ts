import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  userElements = [];
  usersFirstName = '';
  usersLastName = '';
  usersEmail = '';
  usersPassword = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onSubmit(){
    this.userElements.push({
      type: 'userserver',
      firstName: this.usersFirstName,
      lastName: this.usersLastName,
      Email: this.usersEmail,
      Password: this.usersPassword
    });
  }
}
