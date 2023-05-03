import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
currentUser:any 
   LoginUser(usemail:string,uspass:string):Observable<any>{
      let obj= {
            "userName":usemail,
            "password":uspass
          } 
       
      const data=  this.http.post<any>(`${environment.loginUrl}/Login`,obj);
      data.subscribe(res=>{
        sessionStorage.setItem("token", res.accessToken);
        this.currentUser=res.currentUser
      })
    
      return data;
  }
}
