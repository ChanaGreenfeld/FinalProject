import { Component, OnInit } from '@angular/core'
import { order } from 'src/app/classes/user'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  currentBranch: string
  orders: Array<order> = []
  ordersToView: any = []

  constructor(private userServ: UsersService) {}
  ngOnInit(): void {
    debugger
    if (this.userServ.currentUser) {
      this.currentBranch = this.userServ.currentUser.branchName
      this.userServ
        .getOrderByBranchName(this.currentBranch)
        .subscribe((res) => {
          this.orders = res
          this.orders.forEach((ele) => {
            ele.shoppingList.forEach((x) => {
              let obg = {
                id:ele.id,
                fullName: ele.fullName,
                branch: x.branch,
                date: x.date,
                status: x.status,
                shoppingLength: x.shoppingListProducts.length,
              }
              this.ordersToView.push(obg)
            })
          })
        })
    } 
  }


}
