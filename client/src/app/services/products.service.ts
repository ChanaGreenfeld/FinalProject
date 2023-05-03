import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allOrCat :string =''
  allProducts :Array<any>=[]

  constructor(private httpClient:HttpClient ) { }
 
  getProductById(id:string): Observable<any> {
    return this.httpClient.get<any>(`${environment.productUrl}/getProductsById/`+id);
  }

  getProductsPagination(pageNo:number): Observable<any> {
    return this.httpClient.get<any>(`${environment.productUrl}/page/`+ pageNo).pipe
    (tap(res=>{
      this.allProducts = res.products;
    }));

  }

  getProductsPaginationByCategory(pageNo:number, nameCategory:string) : Observable<any>{
    const params = { pageNo: pageNo.toString(), nameCategory: nameCategory };
    return this.httpClient.get<any>(`${environment.productUrl}/categoryPage` , { params }).pipe
    (tap(res=>{
      console.log(res);
    }));

  }

  getProductsByAge(age:string):Observable<any>{
    return this.httpClient.get<any>(`${environment.productUrl}/age/`+age).pipe
    (tap(res=>{
    }));
  }

  getProductsBySale():Observable<any>{
    return this.httpClient.get<any>(`${environment.productUrl}/getProductsBySalary`).pipe
    (tap(res=>{
    }));
  }

  
 
}
