import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { category } from '../classes/category'
import { environment } from 'src/environment/environment'
import { product } from '../classes/product'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Array<category> = []

  constructor(private httpClient: HttpClient) {}

  getAllCategory(): Observable<Array<category>> {
    return this.httpClient.get<Array<category>>(`${environment.productUrl}/GetAllCategory`).pipe(
        tap((result) => {
          this.categories = result
    } ) )
  }

  addCategory(name:string): Observable<product>{
    let obj={
      "nameCategory":name
    }
    return this.httpClient.post<product>(`${environment.productUrl}/AddCategory`,obj)
  }

  deleteCategory(id:string): Observable<product>{
    return this.httpClient.delete<product>(`${environment.productUrl}/DeleteCategory/`+id)
  }

  editCategory(id:string ,newnameCategory:string): Observable<product>{
    let cat={
      "nameCategory":newnameCategory
    }
    return this.httpClient.put<product>(`${environment.productUrl}/EditCategory/`+id,cat)
  }
  
}
