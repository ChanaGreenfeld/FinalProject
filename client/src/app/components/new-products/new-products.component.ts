import { Component } from '@angular/core';
import { general_products } from 'src/app/objects';

@Component({
  selector: 'new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent {
  products: any = general_products
  
}
