import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProductsService } from 'src/app/services/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  show: boolean = false

  constructor(private productServ:ProductsService,
    private router:Router) {}

  ngOnInit(): void {
  }

  openCategory() {
    this.show = true
  }

  getProductsByCategory(event: any) {
    // if(event.target.value=='all'){
    //   this.productServ.allOrCat ='all' 
    //   this.router.navigate(['viewproducts'], { queryParams: { category: event.target.value } })
    // }
    // else{
      this.productServ.allOrCat =event.target.value
      this.productServ.getProductsPaginationByCategory(1,event.target.value).subscribe(result=>{
        debugger
        this.router.navigate(['viewproducts'], { queryParams: { category: event.target.value } })
      })
    // }
  
  }
}
