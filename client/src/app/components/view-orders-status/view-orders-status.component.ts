import { Component,OnInit } from '@angular/core';
import { User, order } from 'src/app/classes/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-orders-status',
  templateUrl: './view-orders-status.component.html',
  styleUrls: ['./view-orders-status.component.css']
})
export class ViewOrdersStatusComponent implements OnInit{
  orders: Array<order> = []
  ordersToView: any = []
 constructor(private userServ:UsersService) { }

  ngOnInit(): void {
    debugger
    // if (this.userServ.currentUser) {
    //   this.userServ.getAllUsers()
    //     .subscribe((res) => {
    //       this.orders = res
    //       this.orders.forEach((ele) => {
    //         ele.shoppingList.forEach((x) => {
    //           let obg = {
    //             id:ele.id,
    //             fullName: ele.fullName,
    //             branch: x.branch,
    //             date: x.date,
    //             status: x.status,
    //             shoppingLength: x.shoppingListProducts.length,
    //           }
    //           this.ordersToView.push(obg)
    //         })
    //       })
    //     })
    // } 
  }

}
