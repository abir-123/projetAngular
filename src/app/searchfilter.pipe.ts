import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';
import { ProductsComponent } from './products/products.component';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: number): Product[] {
  
    return products.filter((v) => 
    v.price.toString().toLowerCase() < searchTerm.toString().toLocaleLowerCase());
   

  

 

}
}