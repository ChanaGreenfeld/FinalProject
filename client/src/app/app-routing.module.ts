import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { BranchComponent } from './components/branch/branch.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path:"viewproducts",component:ViewProductComponent},      
   {path:"branches",component:BranchComponent},
   {path:"productDetails",component:ProductDetailComponent},
  {path:"**",component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
