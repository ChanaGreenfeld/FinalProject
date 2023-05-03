import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  constructor(private httpClient:HttpClient) { }

  sendEMail(subject:string ,  body:string , mail:string): Observable<any> {
    debugger
    let bodye={
      recipient:mail,
      subject:subject,
      text :body
  }
    return this.httpClient.post<any>(`${environment.sendEmailUrl}/sendemail`,bodye ).pipe(tap(res=>{
      alert("emailSendSucceffully");
      debugger
    }))
  }


}
