import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SendmailService } from 'src/app/services/sendmail.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  valid:Boolean=false
pass:string
  constructor(private sendEmail:SendmailService,private userSer:UsersService,private router:Router) { }

 async sendPass(event:any){
  if(event.target[0].value){
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target[0].value)){
      this.valid=true
    }
    else{
      this.valid=false
      await this.userSer.getUserByMail(event.target[0].value).subscribe(res=>{
        this.pass=res.password;
        this.userSer.currentUser=res
        let body = "הסיסמא שלך היא :  "+this.pass;
        this.sendEmail.sendEMail("שחזור סיסמא",body,event.target[0].value).subscribe(res=>{
        this.router.navigate(['/login'])
      })
       })
    }   
  }
  else{
    this.valid=true
  }
 
  }
}
