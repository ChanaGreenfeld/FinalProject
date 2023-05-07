import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from '../classes/manager';
import { environment } from 'src/environment/environment';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  constructor(private httpClient:HttpClient) { }

  getAllManagers(): Observable<Array<Manager>>{
    return this.httpClient.get<Array<Manager>>(`${environment.managerUrl}/GetAllManagers`)
  }

  deleteManager(id:string):Observable<Manager>{
    return this.httpClient.delete<Manager>(`${environment.managerUrl}/DeleteManager/${id}`)
  }

  editManager(id:string , manager:any):Observable<any>{
    
    debugger
    return this.httpClient.put<any>(`${environment.managerUrl}/EditManager/${id}`,manager)
  }
  addManager(manager:Manager):Observable<any>{
    return this.httpClient.post<any>(`${environment.managerUrl}/AddManager`,manager)
  }

}
