import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { BranchComponent } from './components/branch/branch.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SaleComponent } from './components/sale/sale.component';
import { AgeComponent } from './components/age/age.component';
import { GiftcardComponent } from './components/giftcard/giftcard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ManagerComponent } from './components/manager/manager.component';
import { MainManagerComponent } from './components/main-manager/main-manager.component';
import { ProductsManagerFunctionsComponent } from './components/products-manager-functions/products-manager-functions.component';
import { CategoryManagerFunctionsComponent } from './components/category-manager-functions/category-manager-functions.component';
import { ViewOrdersStatusComponent } from './components/view-orders-status/view-orders-status.component';
import { ManagerbranchmanagerComponent } from './components/managerbranchmanager/managerbranchmanager.component';
import { BranchManagerComponent } from './components/branch-manager/branch-manager.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full' },
  {path:"viewproducts",component:ViewProductComponent,title: 'מוצרים Toys Way'},  
  {path:"branches",component:BranchComponent, title: 'סניפי הרשת'},
  {path:"productDetails",component:ProductDetailComponent, title: 'פרטי מוצר'},
  {path:"age",component:AgeComponent, title: 'תוצאות חיפוש לפי גיל'},
  {path:"sale",component:SaleComponent, title: 'תוצאות חיפוש לפי  מוצרים בהנחה'},
  {path:"giftCard",component:GiftcardComponent, title: 'כרטיס מתנה גיפט כארד'},
  {path:"login",component:LoginComponent, title: 'כניסה'},
  {path:"forgotPass",component:ForgotPasswordComponent, title: 'שכחתי סיסמא'},
  {path:"register",component:RegisterComponent, title: 'הרשמה'},
  {path:"manager",component:ManagerComponent, title: 'מנהל'},
  {path:"mainManager",component:MainManagerComponent ,  title: 'מנהל ראשי' },
  {path:"viewOrdersStatus",component:ViewOrdersStatusComponent,title: 'צפייה בסטטוס הזמנות'},
  {path:"managerCategory",component:CategoryManagerFunctionsComponent, title: 'ניהול קטגוריות'},
  {path:"managerbranchmanager",component:ManagerbranchmanagerComponent, title: 'ניהול מנהלי סניף'},
  {path:"managerProducts",component:ProductsManagerFunctionsComponent, title: 'ניהול מוצרים'},
  {path:"managebranches",component:BranchManagerComponent, title: 'ניהול סניפים'},
  {path:"shoppingList",component:ShoppingListComponent, title: 'סל קניות'},
  {path:"payment",component:PaymentComponent, title: 'תשלום'},
  {path:"**",component:PageNotFoundComponent, title: 'דף לא קיים'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
