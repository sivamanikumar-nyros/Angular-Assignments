import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My First Sample';
  Heading: string = '***';
  getResult(){
  	return this.Heading;
  }
}
