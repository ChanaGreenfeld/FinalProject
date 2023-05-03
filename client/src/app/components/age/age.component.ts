import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit{
  products:Array<any>=[]

  constructor(private productServ:ProductsService , private router: Router) {}
  ngOnInit(): void {
    
  }
  age(event:any){
    let age = event.target.value;
    console.log(age);
    
    this.productServ.getProductsByAge(age)
      .subscribe((data: any) => {
        this.products = data;
      })
  
  }

  productDetails(id: string) {
    this.router.navigate(['productDetails'], { queryParams: { id: id } })
  }
}
