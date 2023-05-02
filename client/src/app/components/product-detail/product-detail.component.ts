import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { arrProduct } from 'src/app/classes/product';
import { product } from 'src/app/classes/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product:arrProduct=new arrProduct('','',0,0,'','',0,false,new Date)


  constructor(private route: ActivatedRoute,private prodServ : ProductsService) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.prodServ.getProductById(id).subscribe(res=>{
       this.product=res[0];
      })
     
    });
  }

}
