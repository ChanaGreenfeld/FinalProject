import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  isTruePayment:boolean=false
  isTruePayment2:boolean=false
  nameFromGiftCardToSend:string=''
  textFromGiftCardToSend:string='' 
  mailFromGiftCardToSend:string='' 
  fromFromGiftCardToSend:string=''
  sum: number = 0
  
  constructor(private httpClient:HttpClient) { }

  sendEMail(subject:string ,  body:string , mail:string): Observable<any> {

    let bodye={
      recipient:mail,
      subject:subject,
      text :body
  }
    return this.httpClient.post<any>(`${environment.sendEmailUrl}/sendemail`,bodye )
  }


}
