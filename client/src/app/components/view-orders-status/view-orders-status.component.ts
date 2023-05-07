import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-orders-status',
  templateUrl: './view-orders-status.component.html',
  styleUrls: ['./view-orders-status.component.css']
})
export class ViewOrdersStatusComponent implements OnInit{
 users:Array<User>=[]
  userss:Array<any>=[]
  usersss:Array<any>=[]
 constructor(private userServ:UsersService) { }

  ngOnInit(): void {
    debugger
    this.userServ.getAllUsers().subscribe(res=>{
      this.users=res
      console.log(this.users);
      
    })
    this.users.forEach(ele=>{
      let fullname=ele.firstName +" "+ele.lastName
      ele.shoppingList.forEach(ele=>{
        let us={
          fullname:fullname,
          status:ele.status,
          branch:ele.branch,
          date:ele.date,
          shllength:ele.shoppingListProducts.length
        }
        this.usersss.push(us)
      })
      
    })
    console.log( this.usersss);

  }

}
