import { Component, OnInit } from '@angular/core';
import { ProtractorExpectedConditions } from 'protractor';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product [];
  produitRecherche: Product[];
  nombre : number;
  searchTermnn : number;
  copie = [];
  constructor() { 
    this.products = [
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
    ]
    

    
  }

  ngOnInit(): void {
    
  }
ajouter(prod : Product){
  if(prod.quantity!=0){
prod.quantity--;
}
}

like(prod : Product){
  
prod.like++;
}

Search(){
  //let copie = [];
  //copie = this.products;
  //var a = this.nombre;
  this.products = this.products.filter(res =>{
  //return this.products.forEach(function(item){
    // if(res.price > a){
     return (res.price.toString().toLocaleLowerCase() < this.nombre.toString().toLocaleLowerCase());
   // return  this.products.push(res);}
     //else{

     //}




 
  });


  

    //if(res.price > this.firstName){
//return res
 //
    

  //this.products = this.products.filter(res =>{
  //return this.products.forEach(res =>{
   // if(res.price > this.firstName)
//return res
//  });
//});
 //this.products = this.products.filter(res =>{
  //this.p = this.products.filter(res =>{
  // for(let i in p) {
  //if(p[i].price <= this.firstName)
  //console.log(res);
  //console.log(res);
  
 
  //console.log(cur);
 // return p[i];
  // }
}
}
  //console.log(res);
 //return (res.price.toString().toLocaleLowerCase() < "18")||(res.price.toString().toLocaleLowerCase() < "21");

      //  });
//});
  //  }
  //this.produitRecherche = [];
 // this.products= this.products.filter(res =>{
//let evenNum = [];
 
  
     // console.log(value.price);
   
  
   // var x : string =this.firstName;

 
 
  
   //return (res.price.toString().toLocaleLowerCase() <= this.firstName.toString().toLocaleLowerCase());
 // console.log (x);

      //if ( res[key].price == 'string') {
       
      // this.products.push(cur);

  
    
  
      
   // }
      
   // this.products.filter(cur=>{
      //for (let c in cur){
        // if(this.firstName > c.valueOf()){
        //this.products.splice(index,1);}
      //});

    
       // if(this.firstName <  p1.price){
         // console.log("eee");
         // this.products = this.products.filter(res=>{
         //  return res.price.toString().toLocaleLowerCase().match(this.firstName.toString().toLocaleLowerCase());
             // });


   // console.log(c);
       // return c;
          //});
   // console.log(cur.price);
   
       //  }
     // }
     // });
    //}
 
//Serch(idPrix: number): Product[]{

//this.produitRecherche = [];
    
//this.products.forEach((cur,index)=>{
 // if(this.firstName < cur.price){
  // console.log("cur"+cur);
   //this.produitRecherche.push(cur);
 //}
//});
   // this.products = this.products.filter(res=>{
     //return res.price.toString().toLocaleLowerCase().match(this.firstName.toString().toLocaleLowerCase());
        //});
   

 
 //return this.produitRecherche;
 
//}
//search(query : string){
  //this.produitRecherche = (query) ? this.products.filter(product => product.title.includes(query)) : this.products;

//}
//ajtt(p : Product){
//if(this.firstName <  p.price){
  //console.log("eee");
 // this.products = this.products.filter(res=>{
  //  return res.price.toString().toLocaleLowerCase().match(this.firstName.toString().toLocaleLowerCase());
   //   });
//}

