import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProductsService } from 'src/app/services/products.service'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchWord:string 
  filterProducts: Array<any> = []
  productsToSearch:Array<any>=[]

  constructor(private productServ:ProductsService,private  userServ:UsersService,
    private router:Router) {}

  ngOnInit(): void {
    // this.productServ.getProductsPopular();
    // this.productServ.getProductsByDate();
    }


  searchFilter(event: any): void {
    this.searchWord = event.target.value
    if(this.searchWord)
    {
      if(this.productServ.allproducttosearch2.length<1){
         this.productServ.getAllProduct().subscribe(res=>{
        this.productsToSearch=this.productServ.allproducttosearch2,
        this.filterProducts=this.productServ.allproducttosearch2
      })
      }
      else{
        this.productsToSearch=this.productServ.allproducttosearch2,
        this.filterProducts=this.productServ.allproducttosearch2
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



}
