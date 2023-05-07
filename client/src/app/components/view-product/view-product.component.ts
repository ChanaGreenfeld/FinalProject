import { Component, OnInit } from '@angular/core'
import { arrProduct, arrProduct3, product } from 'src/app/classes/product'
import { ProductsService } from 'src/app/services/products.service'
import { ActivatedRoute, Router } from '@angular/router'
import { ShoppingListService } from 'src/app/services/shopping-list.service'
import { UsersService } from 'src/app/services/users.service'

// ==== TODO ==== //
// import { products as _products } from 'src/app/objects'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  
  // ==== TODO ==== //
  // products: Array<any> = _products
  // filteredProducts: Array<any> = _products
  filteredProducts: Array<any> = []

  products: Array<any> =[]
  pageNo: number = 1
  pageSize: number = 20
  totalItems: number = 0
  pageSizeForCategory: number = 12
  allOrCatBool: boolean = false
  showCategory: boolean = true
  category: string = ''

  constructor(
    private productServ: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private shoppingListServ: ShoppingListService,
    private userServ: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    
  // ==== TODO ==== //
    // this.activatedRoute.queryParams.subscribe(params => {
    //   if (this.category !== params['category']) {
    //     this.category = params['category'];
    //     this.filterByCategory(this.category)
    //   }
    // });
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      const category = params['category']
      this.pageNo = 1
      if (category == 'all') {
        this.showCategory = false
        this.allOrCatBool = true
        this.productServ.allOrCat = 'all'
        this.getProducts()
      } else {
        this.allOrCatBool = false
        this.showCategory = true
      }
    })
  }

  // ==== TODO ==== //
  // filterByCategory(category: string) {
  //   category == 'all' ? this.filteredProducts = this.products :
  //     this.filteredProducts = [this.products.find(item => item.nameCategory == category)];
  // }

  getProductsByCategory(event: any) {
    this.showCategory = true
    this.productServ.allOrCat = event.target.value
    this.getProductsPaginationByCategory()
  }


  addToshopping(product: arrProduct3) {
    if (this.userServ.currentUser) {
      const index = this.shoppingListServ.shoppingList.indexOf(product);
      if (index == -1) {
        product.item = 1
        this.shoppingListServ.shoppingList.push(product)
      }
      else {
        this.shoppingListServ.shoppingList[index].item = this.shoppingListServ.shoppingList[index].item + 1;
      }
      this.shoppingListServ.total += product.price
      alert("מוצר נוסף בהצלחה")
    }
    else {
      this.router.navigate(['login'])
    }
  }

  // ========================Pagination For All Products=================================
  getProducts() {
    this.productServ
      .getProductsPagination(this.pageNo)
      .subscribe((data: any) => {
        this.products = data.products
        this.totalItems = data.total
        this.totalItems = data.totalItems
      })
  }

  setPageNo(pageNo: number) {
    this.pageNo = pageNo
    this.getProducts()
  }

  getPages() {
    const totalPages = Math.ceil(this.totalItems / this.pageSize)
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
    return pages
  }

  totalPages() {
    return Math.ceil(this.totalItems / this.pageSize)
  }
  scrollToTop() {
    window.scrollTo(0, 0)
  }
  // ==========================================================

  // ==================pagination For Products By Category==============================

  getProductsPaginationByCategory() {
    this.productServ
      .getProductsPaginationByCategory(this.pageNo, this.productServ.allOrCat)
      .subscribe((data) => {
        this.products = data
        this.totalItems = data.totalItems
      })
  }
  setPageNoCat(pageNo: number) {
    this.pageNo = pageNo
    this.getProductsPaginationByCategory()
  }

  // ====================================================================================
  productDetails(id: string) {
    this.router.navigate(['productDetails'], { queryParams: { id: id } })
  }
}
