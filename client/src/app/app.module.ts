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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewProductComponent,
    BranchComponent,
    ShowWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
