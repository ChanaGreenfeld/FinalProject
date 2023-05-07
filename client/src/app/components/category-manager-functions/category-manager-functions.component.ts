import { Component , OnInit } from '@angular/core';
import { category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-manager-functions',
  templateUrl: './category-manager-functions.component.html',
  styleUrls: ['./category-manager-functions.component.css']
})
export class CategoryManagerFunctionsComponent implements OnInit{
 categories:Array<category>=[]
  flagAdd:boolean = false
  flagEdit:boolean = false
  idToEdit:string
  
  constructor( private categoryServ:CategoryService ) { }

  ngOnInit(): void {
    this.categoryServ.getAllCategory().subscribe(res=>{
      this.categories=res
    })
  }


  toAdd(){
    this.flagAdd=true
  }

  toEdit(idToEdit:string){
    this.flagEdit=true
    this.idToEdit=idToEdit
  }

  addCategory(name:string) {
    this.flagAdd=false
    this.categoryServ.addCategory(name).subscribe(res=>{
      alert("קטגוריה נוספה בהצלחה")
      this.ngOnInit()
    })
  }

  editCategory(newname:string){
    this.flagEdit=false
    this.categoryServ.editCategory(this.idToEdit,newname).subscribe(res=>{
      alert("קטגוריה עודכנה בהצלחה")
      this.ngOnInit()
    })
  }

  deleteCategory(id:string){
    const index =  this.categories.findIndex(x=>x._id==id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
    this.categoryServ.deleteCategory(id).subscribe(res=>{
      alert("קטגוריה נמחקה בהצלחה")
    })
  }
}
