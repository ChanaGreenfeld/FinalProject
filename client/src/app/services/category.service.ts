import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { category } from '../classes/category'
import { environment } from 'src/environment/environment'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Array<category> = []

  constructor(private httpClient: HttpClient) {}

  getAllCategory(): Observable<Array<category>> {
    return this.httpClient.get<Array<category>>(`${environment.categoryUrl}/GetAllCategory`).pipe(
        tap((result) => {
          this.categories = result
    } ) )
  }
  
}
