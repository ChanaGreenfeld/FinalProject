import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


constructor(private userServ:UsersService,private router:Router) { }

ngOnInit(): void {
  
}

  login(event:any) {
    this.userServ.LoginUser(event.target[0].value,event.target[1].value).subscribe(res=>{
      this.userServ.currentUser=res.currentUser
      sessionStorage.setItem("token", res.accessToken);
      const token = sessionStorage.getItem('token');    
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const role = payload.role;
        res.role=role
        this.router.navigate([''])
      
      }      
    })
  }

}
