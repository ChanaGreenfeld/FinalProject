import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { branch } from '../classes/branch';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Place } from '../classes/place';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  shortedWay:any
  constructor(private httpClient: HttpClient) { }
  
  getAllBranches(): Observable<Array<branch>> {
    return this.httpClient.get<Array<branch>>(`${environment.branchUrl}/GetAllbranches`);
  }
 
  search(searchText:any , address:any):Observable< Place>  {
    let options ={ params : { data : JSON.stringify(address)}}
    return this.httpClient.get<Place>(`${environment.branchUrl}/shortestWay/`+ searchText , options ).pipe(
      tap((result) => {     
        this.shortedWay = result;
      })
    )
  }



}
