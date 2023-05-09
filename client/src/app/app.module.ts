import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BranchComponent } from './components/branch/branch.component';
import { ShowWayComponent } from './components/show-way/show-way.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatCardModule} from '@angular/material/card'
import { MatDialogModule} from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import {MatSelectModule} from '@angular/material/select';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SaleComponent } from './components/sale/sale.component';
import { AgeComponent } from './components/age/age.component';
import { GiftcardComponent } from './components/giftcard/giftcard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ManagerComponent } from './components/manager/manager.component';
import { BranchManagerComponent } from './components/branch-manager/branch-manager.component';
import { MainManagerComponent } from './components/main-manager/main-manager.component';
import { CategoryManagerFunctionsComponent } from './components/category-manager-functions/category-manager-functions.component';
import { ProductsManagerFunctionsComponent } from './components/products-manager-functions/products-manager-functions.component';
import { ViewOrdersStatusComponent } from './components/view-orders-status/view-orders-status.component';
import { ManagerbranchmanagerComponent } from './components/managerbranchmanager/managerbranchmanager.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { CountSelectionComponent } from './components/count-selection/count-selection.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewProductComponent,
    BranchComponent,
    ShowWayComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    SaleComponent,
    AgeComponent,
    GiftcardComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ShoppingListComponent,
    PaymentComponent,
    ManagerComponent,
    BranchManagerComponent,
    MainManagerComponent,
    CategoryManagerFunctionsComponent,
    ProductsManagerFunctionsComponent,
    ViewOrdersStatusComponent,
    ManagerbranchmanagerComponent,
    AboutComponent,
    HeaderComponent,
    ProductComponent,
    CountSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    FormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    GoogleMapsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
