import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { arrProduct, arrProduct3 } from 'src/app/classes/product';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit{
  products:Array<any>=[]

  constructor(private productServ:ProductsService ,    private router: Router,
    private shoppingListServ:ShoppingListService,
    private userServ:UsersService) {}
  ngOnInit(): void {
    
  }
  age(event:any){
    let age = event.target.value;
    this.productServ.getProductsByAge(age)
      .subscribe((data: any) => {
        this.products = data;
      })
  
  }
  addToshopping(product:arrProduct3){
    if(this.userServ.currentUser){
      this.shoppingListServ.shoppingList.push(product)
      this.shoppingListServ.total += product.price

        alert("מוצר נוסף בהצלחה")
    }
    else{
      this.router.navigate(['login'])
    }
  }

  productDetails(id: string) {
    this.router.navigate(['productDetails'], { queryParams: { id: id } })
  }

  
}
