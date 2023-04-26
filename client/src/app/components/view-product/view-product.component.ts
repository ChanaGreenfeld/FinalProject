import { Component, OnInit } from '@angular/core'
import { arrProduct, product } from 'src/app/classes/product'
import { ProductsService } from 'src/app/services/products.service'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  products: Array<any> = []
  prod: Array<arrProduct> = []

  constructor(private productServ: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productServ.products
    debugger
  }
  
}
// <table dir="rtl">
//   <thead>
//     <tr>
//       <th>שם מוצר</th>
//       <th>תיאור</th>
//       <th>מחיר</th>
//       <th>יחידות</th>
//       <th>תמונה</th>
//       <th>גיל</th>
//       <th>פופולרי</th>
//       <th>הנחה</th>
//       <th>תאריך</th>
//     </tr>
//   </thead>
//   <tbody *ngIf="products.length > 0" data-test-id="searched-customers">
//     <tr *ngFor="let prod of products" class="slide-up-fade-in">
//       <td>{{ prod.name }}</td>
//       <td>{{ prod.description }}</td>
//       <td>{{ prod.price }}</td>
//       <td>{{ prod.units }}</td>
//       <img src="{{ prod.pic }}"/>
//       <td>{{ prod.age }}</td>
//       <td>{{ prod.populare }}</td>
//       <td>{{ prod.salary }}</td>
//       <td>{{ prod.date }}</td>
//     </tr>
//   </tbody>
// </table>
