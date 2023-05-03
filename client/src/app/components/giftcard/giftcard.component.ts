import { CurrencyPipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Route, Router } from '@angular/router'
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
  sum: number = 0
  other: boolean = false
  me: boolean = false

  constructor(private sendMail: SendmailService , private router:Router ,private userServ:UsersService) {}

  ngOnInit(): void {}

  oneStage(sum: any) {
    this.sum = sum.value
    this.one = false
    this.two = true
  }

  toOther() {
    this.other = true
    this.me = false
  }
  toMe() {
    this.me = true
    this.other = false
  }

  send(name: any, text: any, mail: any, from: any) {

    let sub = " היי  " +name.value+"  מחכה לך הפתעה מ-Toys Way "
    let body = `${name.value}שלום לך  :  קיבלת גיפט כארד מתנה על סכום  ${this.sum} ש"ח,   ברכה:   ${text.value}   ממני :)   ${from.value}`
    this.sendMail.sendEMail(sub,body, mail.value).subscribe(res=>{
    alert("האימייל נשלח בהצלחה!!!  תחכה שיגידו לך תודה...:)")})
    this.router.navigate([''])
  }

  send2(){    
    let sub = " היי  " +this.userServ.currentUser.firstName+"  מחכה לך הפתעה מ-Toys Way "
    let body = ` ${this.sum} ש"ח,   : קיבלת גיפט כארד  , מעריכים אותך על שפינקת את עצמך !!! ת יישר כח`
    this.sendMail.sendEMail(sub,body, this.userServ.currentUser.email).subscribe(res=>{
    alert("האימייל נשלח בהצלחה!!!  תחכה שיגידו לך תודה...:)")})
    this.router.navigate([''])
  }


}
