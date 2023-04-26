import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { arrProduct, arrProduct2, product } from '../classes/product';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Array<product>=[]

  constructor(private httpClient:HttpClient) { }
 
  getProductsByCategory(nameCategory:string): Observable<any> {
    debugger
    if(nameCategory=='all'){
      return this.httpClient.get<any>(`${environment.productUrl}/GetAllProduct`).pipe(
        tap((result) => {
          this.products = result.products;
          console.log(result.products);
          
    } ) )
    }
    else{
      return this.httpClient.get<any>(`${environment.productUrl}/getProductsByNameCategory/`+nameCategory).pipe(
        tap((result) => {
         this.products = result.products;
    } ) )
    }
  }

}
