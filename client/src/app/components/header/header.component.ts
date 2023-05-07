import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from 'src/app/objects';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchWord: string
  filterProducts: Array<any> = []
  productsToSearch: Array<any> = []

  value: string = ''
  showSearchBox: boolean = false
  
  products:Array<any>=[]

  categories: any = categories

  constructor(private productServ: ProductsService, private router:Router) { }

  searchFilter(event: any): void {
    this.searchWord = event.target.value
    if (this.searchWord) {
      if (this.productServ.allproducttosearch2.length < 1) {
        this.productServ.getAllProduct().subscribe(res => {
          this.productsToSearch = this.productServ.allproducttosearch2,
            this.filterProducts = this.productServ.allproducttosearch2
        })
      }
      else {
        this.productsToSearch = this.productServ.allproducttosearch2,
          this.filterProducts = this.productServ.allproducttosearch2
      }
      this.filterProducts = this.productsToSearch.filter((l) =>
        l.name.startsWith(this.searchWord)
      )


    } else {
      this.filterProducts = this.productsToSearch;
    }
  }
  
  productDetail(id:number){
    this.router.navigate(['productDetails'], { queryParams: { id: id } })
  }

  close() {
    this.value = ''
    this.showSearchBox = false
  }

  age(event:any){
    let age = event.target.value;
    this.productServ.getProductsByAge(age)
      .subscribe((data: any) => {
        this.products = data;
      })
  }

}
