import { Component ,OnInit} from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { branch } from 'src/app/classes/branch';
import { BranchesService } from 'src/app/services/branches.service';

@Component({
  selector: 'app-branch-manager',
  templateUrl: './branch-manager.component.html',
  styleUrls: ['./branch-manager.component.css']
})
export class BranchManagerComponent implements OnInit {
  branches:Array<branch>=[]
  flagEdit:boolean=false
  branchToEdit:branch=new branch("","");
  idToEdit:string
  flagAdd:boolean
  constructor( private branchSer:BranchesService) {   }

  ngOnInit(): void {
    this.branchSer.getAllBranches().subscribe(res=>{
      this.branches=res
    })
  }
  toEdit(branch:any){
    this.flagEdit =!this.flagEdit
    this.branchToEdit.address=branch.address   
    this.branchToEdit.name=branch.name
    this.idToEdit=branch._id
  }

  changeAddFlag() {
    this.flagAdd = !this.flagAdd;
  }

  editbranch(name:string,address:string){
      let branc= new branch(name,address)
      this.branchSer.editBranch(this.idToEdit , branc).subscribe(res=>{
        alert("סניף עודכן בהצלחה")
        this.ngOnInit()
        this.flagEdit=!this.flagEdit
      })
  }

  addBranch(name:string,address:string){
    debugger
    let mana = new branch(name,address)
    this.branchSer.addBranch(mana).subscribe(res=>{
      alert("סניף נוסף בהצלחה")
      this.ngOnInit()
      this.flagAdd=!this.flagAdd
    })

  }

}
