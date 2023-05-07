import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { arrProduct, product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allOrCat :string =''
  allProducts :Array<any>=[]
  allproducttosearch:Array<any>=[]
  allproducttosearch2:Array<any>=[]
  productCategory:Array<product>
  constructor(private httpClient:HttpClient ) { }
 
  getAllProduct(): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${environment.productUrl}/GetAllProduct`).pipe(tap(res=>{
      this.productCategory=res;
      res.map(x=>this.allproducttosearch.push(x.products))
    for (let i = 0; i < this.allproducttosearch.length; i++) {
      for (let j = 0; j < this.allproducttosearch[i].length; j++) {
        this.allproducttosearch2.push(this.allproducttosearch[i][j])
      }      
    }
    }))
  }

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
    }));

  }

  getProductsByAge(age:string):Observable<any>{
    return this.httpClient.get<any>(`${environment.productUrl}/age/`+age).pipe
    (tap(res=>{
    }));
  }

  getProductsBySale():Observable<any>{
    return this.httpClient.get<any>(`${environment.productUrl}/getProductsBySalary`) 
  }

  getProductsPopular(){
    return this.httpClient.get<any>(`${environment.productUrl}/getProductsPopular`) 
  }

  getProductsByDate(){
    return this.httpClient.get<any>(`${environment.productUrl}/getProductsByDate`) 
  }

  getProductByIdAndUpdatePopular(id:string):Observable<any>{
    return this.httpClient.get<any>(`${environment.productUrl}/getProductByIdAndUpdatePopular/${id}`)
  }
  getProductByIdAndUpdateUnit(id:string):Observable<any>{
    return this.httpClient.get<any>(`${environment.productUrl}/getProductByIdAndUpdateUnit/${id}`)
  }

  deleteProduct(id:string,nameCat:string):Observable<any>{
    return this.httpClient.delete<any>(`${environment.productUrl}/DeleteProduct/${id}/${nameCat}`)
  }

  addProduct(newProduct:any):Observable<any>{
    return this.httpClient.post<any>(`${environment.productUrl}/AddProduct`,newProduct)
  }

  EditProduct(id:string ,newProd:any):Observable<any>{
    return this.httpClient.put<any>(`${environment.productUrl}/EditProduct/`+id,newProd)
  }
}
