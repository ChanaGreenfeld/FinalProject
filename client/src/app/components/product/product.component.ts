import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any = null

  constructor (private router: Router) { }

  openProductDetails() {
    this.router.navigate(['productDetails'], { queryParams: { id: this.product._id } })
  }

  addToCart(e: any) {
    e.stopPropagation()
  }
}
