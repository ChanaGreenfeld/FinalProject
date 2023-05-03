import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProductsService } from 'src/app/services/products.service'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private productServ:ProductsService,
    private usercate:UsersService) {}

  ngOnInit(): void {
  }


  


  jwt(){
   this.usercate.LoginUser("st lev","533184039").subscribe(res=>{
    console.log(this.usercate.currentUser);
   })

  }

  jwt2(){
    const token = sessionStorage.getItem('token');
    
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const role = payload.role;
      console.log(role);
    }
  }
}
