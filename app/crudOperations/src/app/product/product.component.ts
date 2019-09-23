import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: Http) { }

  confirmationString: string = "New product has been added";
  isAdded: boolean = false;

  productObj: object = {};

  addNewProduct = function(product){
  	this.productObj = {
  		"name": product.name,
  		"color": product.color
  	}
  	this.http.post("http://10.90.90.117:5555/products/", this.productObj).subscribe((res: Response)=>{
  		console.log(res);
  		this.isAdded = true;
  	})
  }


  ngOnInit() {
  }

}
