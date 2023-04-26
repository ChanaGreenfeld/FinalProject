import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { BranchComponent } from './components/branch/branch.component';
import { ShowWayComponent } from './components/show-way/show-way.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"viewproducts",component:ViewProductComponent},
  {path:"branches",component:BranchComponent},
  {path:"showWay",component:ShowWayComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
