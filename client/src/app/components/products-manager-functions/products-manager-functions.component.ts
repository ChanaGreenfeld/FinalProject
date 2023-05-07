import { Component , OnInit } from '@angular/core';
import { arrProduct, product } from 'src/app/classes/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-manager-functions',
  templateUrl: './products-manager-functions.component.html',
  styleUrls: ['./products-manager-functions.component.css']
})
export class ProductsManagerFunctionsComponent implements OnInit {
  productss:Array<product>=[]
  products:Array<any>=[]
  product:Array<any>=[]
  newProduct: arrProduct = new arrProduct("","",0,0,"","0",0,false,new Date())
  categoryName: string;
  flagAdd = false;
  flagEdit = false;
  constructor(private productServ: ProductsService ) { }
  idToEdit:string
  toeditProduct: arrProduct = new arrProduct("","",0,0,"","0",0,false,new Date())

  ngOnInit(): void {
    this.productServ.getAllProduct().subscribe(res=>{
      this.products=this.productServ.productCategory
      console.log(this.products);
      
      this.products.forEach(ele=>{
        let namec=ele.nameCategory
        for (let i = 0; i < ele.products.length; i++) {
         let obj={
            id:ele.products[i]._id,
            nameCategory: namec,
            name: ele.products[i].name,
            description: ele.products[i].description,
            price: ele.products[i].price,
            units: ele.products[i].units,
            pic: ele.products[i].pic,
            age: ele.products[i].age,
            populare: ele.products[i].populare,
            salary: ele.products[i].salary,
            date:ele.products[i].date
         }
         this.product.push(obj)
        }
      })
    })
  }

  deleteProduct(prod:any){
    this.productServ.deleteProduct(prod.id,prod.nameCategory).subscribe(res=>{
      alert("מוצר נמחק בהצלחה")
      const index =  this.product.indexOf(prod)
      if (index !== -1) {
        this.product.splice(index, 1);  
      }
    })
  }
  
  changeAddFlag() {
    this.flagAdd = !this.flagAdd;
  }

  toEdit(prod:any){
    this.flagEdit =!this.flagEdit
    this.idToEdit=prod.id
    this.toeditProduct.age=prod.age
    this.toeditProduct.date=prod.date,
    this.toeditProduct.description=prod.description,
    this.toeditProduct.name=prod.name
    this.toeditProduct.pic=prod.pic
    this.toeditProduct.populare=prod.populare
    this.toeditProduct.price=prod.price
    this.toeditProduct.salary=prod.salary
    this.toeditProduct.units=prod.units
  }

  addProduct() {
    this.newProduct.date = new Date();
    this.newProduct.pic = '../../assets/logo.png'
    this.newProduct.populare = 1;
    this.newProduct.salary = false;
    let myproduct = new product(this.categoryName,[this.newProduct])
    this.productServ.addProduct(myproduct).subscribe(
      data => alert("מוצר התווסף בהצלחה"),
      err => console.log(err)
    )
  }

  editProduct(){
    debugger
    let myproduct = new arrProduct(this.toeditProduct.name,this.toeditProduct.description,this.toeditProduct.price,
      this.toeditProduct.units,this.toeditProduct.pic,this.toeditProduct.pic,this.toeditProduct.populare,this.toeditProduct.salary,this.toeditProduct.date)
    this.productServ.EditProduct(this.idToEdit,myproduct).subscribe(
      data => alert("עריכת מוצר הצליחה"),
      err => console.log(err)
    )

  }


  
}
