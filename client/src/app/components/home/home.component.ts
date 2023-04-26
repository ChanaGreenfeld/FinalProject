import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { category } from 'src/app/classes/category'
import { CategoryService } from 'src/app/services/category.service'
import { ProductsService } from 'src/app/services/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: Array<category> = []
  show: boolean = false

  constructor(private categoryServ: CategoryService,
    private productServ:ProductsService,
    private router:Router) {}

  ngOnInit(): void {
    this.categoryServ.getAllCategory().subscribe((result) => {
      this.categories = result
    });
  }

  openCategory() {
    this.show = true
  }
  getProductsByCategory(event: any) {
    console.log(event.target.value)
    this.productServ.getProductsByCategory(event.target.value).subscribe(result=>{
          this.router.navigate(['viewproducts'])
    })
  }
}
