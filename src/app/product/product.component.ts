import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor() { }
  columns: string[] = ["Name", "Code","manufactireDate","price","rating","Description"];
  products : IProduct[] = 
  [
    {
      "productId" : 1,
      "productName" : "Garden Cart",
      "productCode" : "GDN-023",
      "productDescription" : "15 gallon capacity rolling garden cart",
      "manufactireDate" : "April 20, 2018",
      "price" : 32.99,
      "rating" : 4.2,
      "image" : ""
    },
    {
      "productId" : 2,
      "productName" : "Hammer",
      "productCode" : "tbc-043",
      "productDescription" : "15 gallon capacity rolling garden cart",
      "manufactireDate" : "May 20, 2018",
      "price" : 8.90,
      "rating" : 4.8,
      "image" : ""
    },
  ];

  
  ngOnInit() {
  }

  getProducts()
  {

  }

}
