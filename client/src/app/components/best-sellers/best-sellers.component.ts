import { Component } from '@angular/core';
import { general_products } from 'src/app/objects';

@Component({
  selector: 'best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent {
  products: any = general_products

}
