import { Injectable } from '@angular/core';
import { arrProduct, arrProduct3 } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  shoppingList:Array<arrProduct3>=[];
  total:number =0
  constructor() { }


}
