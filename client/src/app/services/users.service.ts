import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../classes/user';
import { BranchesService } from './branches.service';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { ShoppingListService } from './shopping-list.service';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient, private branhServ:BranchesService , private shoppingServ:ShoppingListService ,private productServ:ProductsService) { }
  currentUser:any
   arrIdOfShoppingBagProducts:any =[]

  LoginUser(usemail:string,uspass:string):Observable<any>{
      let obj= {
            "userName":usemail,
            "password":uspass
          } 
       
      return this.httpClient.post<any>(`${environment.loginUrl}/Login`,obj);
     
  }

  getUserByMail(mail:string):Observable<any>{
    return this.httpClient.get<any>(`${environment.userUrl}/GetUserByMail/`+mail)
  }

  addUser(user:any):Observable<Array<User>>{
    return this.httpClient.post<Array<User>>(`${environment.userUrl}/AddUser`,user).pipe(tap(res=>{
      this.currentUser=res
    }))
  }

  finishBuy( ):Observable<any>{
    this.shoppingServ.shoppingList.forEach(x=>{
       this.arrIdOfShoppingBagProducts.push({ "id": x._id });
       this.productServ.getProductByIdAndUpdatePopular(x._id).subscribe()   
       this.productServ.getProductByIdAndUpdateUnit(x._id).subscribe()   
       })

   let add={
      userName:this.currentUser.userName,
      password:this.currentUser.password,
      firstName:this.currentUser.firstName,
      lastName:this.currentUser.lastName,
      phone:this.currentUser.phone,
      email:this.currentUser.email,
      address:{
        city:this.currentUser.address.city,
        street:this.currentUser.address.street,
        numBuild:this.currentUser.address.numBuild,
      },
      shoppingList:{
        status:"מחסן",
        branch:this.branhServ.currentBranch.name,
        date:new Date(),
        shoppingListProducts:this.arrIdOfShoppingBagProducts
      }
    }

    return this.httpClient.post<Array<any>>(`${environment.userUrl}/EditUserShoppingList`,add).pipe(tap(res=>{
      this.currentUser=res
    }))
  }


}
