import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { arrProduct, arrProduct3, product } from 'src/app/classes/product';
import { cart } from 'src/app/objects';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  products: Array<any> = cart
  total: number = 452.85
  // products:Array<any>=[]
  // total: number

  constructor(private shoppingServ: ShoppingListService, private router: Router) { }

  ngOnInit(): void {
    // this.products = this.shoppingServ.shoppingList
    // this.total = this.shoppingServ.total
  }

  deleteFromShoppingList(prod: arrProduct3, count: string) {
    const index = this.shoppingServ.shoppingList.indexOf(prod);
    if (index !== -1) {
      this.shoppingServ.shoppingList.splice(index, 1);
      this.total = this.total - Number(count) * prod.price
    }
  }
  up(prod: arrProduct3, num: any) {
    prod.item = num;
  }

  continue() {
    this.router.navigate(['branches'])
  }
  change(event: any, prod: arrProduct3) {
    if (event == '+') {
      this.total = this.total + prod.price
      prod.item++;
    }
    else {
      this.total = this.total - prod.price
      prod.item--;
    }

  }
}
