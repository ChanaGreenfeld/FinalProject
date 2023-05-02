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
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import {MatSelectModule} from '@angular/material/select';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewProductComponent,
    BranchComponent,
    ShowWayComponent,
    PageNotFoundComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    GooglePlaceModule,
    HttpClientModule,
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
