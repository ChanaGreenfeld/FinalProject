import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { arrProduct, product } from '../classes/product';
import { environment } from 'src/environment/environment';
import { category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // productsByCategory:Array<product>=[]
  // allproducts:Array<any>=[]
  allOrCat :string =''
  
  constructor(private httpClient:HttpClient ) { }
 
  // getAllProducts():Observable<any>{
  //   return this.httpClient.get<any>(`${environment.productUrl}/GetAllProduct`).pipe(
  //     tap((result) => {
  //       this.allproducts = result.products;}))
  //     }

  // getProductsByCategory(nameCategory:string): Observable<any> {
  //   return this.httpClient.get<any>(`${environment.productUrl}/getProductsByNameCategory/`+nameCategory).pipe(
  //     tap((result) => {
  //       this.productsByCategory = result.products;
  //  } ) )
  // }



  getProductById(id:string): Observable<any> {
    debugger
    return this.httpClient.get<any>(`${environment.productUrl}/getProductsById/`+id);
  }
 

  getProductsPagination(pageNo:number): Observable<any> {
    return this.httpClient.get<any>(`${environment.productUrl}/page/`+ pageNo).pipe
    (tap(res=>{
      console.log(res);

    }));

  }


  getProductsPaginationByCategory(pageNo:number, nameCategory:string) : Observable<any>{
    debugger
    const params = { pageNo: pageNo.toString(), nameCategory: nameCategory };
    return this.httpClient.get<any>(`${environment.productUrl}/categoryPage` , { params }).pipe
    (tap(res=>{
      console.log(res);
debugger
    }));

  }







  
 
}
