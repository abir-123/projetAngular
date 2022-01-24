import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
prodd ; Product;
  constructor() { }

  ngOnInit(): void {
    this.prodd = new Product();
    
  }
  addProduit(){
  console.log(this.prodd);
  }
}
