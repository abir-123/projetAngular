import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProd = new Product();
  constructor() { }
liste = [];
  ngOnInit(): void {
  }
addProduit(){
  //console.log(this.newProd);
}
}
