import { CurrencyPipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Route, Router } from '@angular/router'
import { SendmailService } from 'src/app/services/sendmail.service'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-giftcard',
  templateUrl: './giftcard.component.html',
  styleUrls: ['./giftcard.component.css'],
})
export class GiftcardComponent implements OnInit {
  one: boolean = true
  two: boolean = false
 
  other: boolean = false
  me: boolean = false
  isTruePayment:boolean
  isTruePayment2:boolean
   sum: number = 0
  constructor(private sendMail: SendmailService , private router:Router , private route:ActivatedRoute  ,private userServ:UsersService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const from = params['from']
    if(from=='pay'){
      this.one=false,
      this.two=false,
      this.other=false,
      this.me=false,
      this.isTruePayment = this.sendMail.isTruePayment
      this.isTruePayment2 = this.sendMail.isTruePayment2

    }
    else{
      this.one=true,
      this.two=false,
      this.other=false,
      this.me=false,
      this.isTruePayment = this.sendMail.isTruePayment
      this.isTruePayment2 = this.sendMail.isTruePayment2
    }
    })
  }

  oneStage(sum: any) {
    if(this.userServ.currentUser){
      this.sendMail.sum = sum.value
    this.one = false
    this.two = true
    }
    else
    this.router.navigate(['login'])
  }

  toOther() {
    this.other = true
    this.me = false
  }
  toMe() {
    this.me = true
    this.other = false
  }

  send() {

    let sub = " היי  " +this.sendMail.nameFromGiftCardToSend+"  מחכה לך הפתעה מ-Toys Way "
    let body = `${this.sendMail.nameFromGiftCardToSend}שלום לך  :  קיבלת גיפט כארד מתנה על סכום  ${this.sendMail.sum} ש"ח,   ברכה:   ${this.sendMail.textFromGiftCardToSend}   ממני :)   ${this.sendMail.fromFromGiftCardToSend}`
    this.sendMail.isTruePayment=false

    this.sendMail.sendEMail(sub,body, this.sendMail.mailFromGiftCardToSend).subscribe(res=>{
    alert("האימייל נשלח בהצלחה!!!  תחכה שיגידו לך תודה...:)")})
  }

  send2(){    
    let sub = " היי  " +this.userServ.currentUser.firstName+"  מחכה לך הפתעה מ-Toys Way "
    let body = ` ${this.sendMail.sum} ש"ח,   : קיבלת גיפט כארד  , מעריכים אותך על שפינקת את עצמך !!! ת יישר כח`
    this.sendMail.isTruePayment2=false
    this.sendMail.sendEMail(sub,body, this.userServ.currentUser.email).subscribe(res=>{
      this.sendMail.isTruePayment2=false
    alert("האימייל נשלח בהצלחה!!!  תחכה שיגידו לך תודה...:)")})
  }

  toPay(name:string,text:string,mail:string,from:string){
    this.sendMail.isTruePayment=true
    this.sendMail.nameFromGiftCardToSend=name;
    this.sendMail.textFromGiftCardToSend=text;
    this.sendMail.mailFromGiftCardToSend=mail;
    this.sendMail.fromFromGiftCardToSend=from;
    this.router.navigate(['payment'],{ queryParams: { from: 'gift' }})
  }

  toPay2(){
    this.sendMail.isTruePayment2=true
    this.router.navigate(['payment'],{ queryParams: { from: 'gift' }})
  }

}
