import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit{
  products:Array<any>=[]

  constructor(private productServ:ProductsService , private router: Router) {}
  ngOnInit(): void {
    this.productServ.getProductsBySale().subscribe(res=>{
      this.products=res;
    });
  }



  productDetails(id: string) {
    this.router.navigate(['productDetails'], { queryParams: { id: id } })
  }
}
