import { Component ,OnInit} from '@angular/core';
import { branch } from 'src/app/classes/branch';
import { Manager } from 'src/app/classes/manager';
import { BranchesService } from 'src/app/services/branches.service';
import { ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-managerbranchmanager',
  templateUrl: './managerbranchmanager.component.html',
  styleUrls: ['./managerbranchmanager.component.css']
})
export class ManagerbranchmanagerComponent implements OnInit {
  managers:Array<any>=[]
  managerToEdit:Manager= new Manager("","","","","")
  flagEdit:boolean=false
  branches:Array<branch>=[]
  flagAdd:boolean=false
  idToEdit:string
  selectedBranch:string
  currentBranch:string


  constructor(private manaerServ:ManagersService , private branchSer:BranchesService ) {   }
  ngOnInit(): void {
    this.manaerServ.getAllManagers().subscribe(res=>{
      this.managers=res
    })
  }

  deleteManager(id:string){
    debugger
    this.manaerServ.deleteManager(id).subscribe(res=>{
      alert("מנהל נמחק בהצלחה")
      const index =  this.managers.findIndex(x=>x._id==id)
      if (index !== -1) {
        this.managers.splice(index, 1);  
      }
    })
  }
  
  toEdit(manager:any){
    this.flagEdit =!this.flagEdit
    this.managerToEdit.firstName=manager.firstName
    this.managerToEdit.lastName=manager.lastName
    this.idToEdit=manager._id
    this.managerToEdit.userName=manager.userName
    this.managerToEdit.password=manager.password
    this.managerToEdit.branchName=manager.branchName
    this.branchSer.getAllBranches().subscribe(res=>{
      this.branches=res
    })
  }

  editmanager(fist:string,lastName:string,username:string,pass:string){
    let mana = new Manager(username,pass,fist,lastName,this.currentBranch)
    this.manaerServ.editManager(this.idToEdit,mana).subscribe(res=>{
      alert("מנהל סניף עודכן בהצלחה")
      this.ngOnInit()
    })
  }

  changeAddFlag() {
    this.flagAdd = !this.flagAdd;
    this.branchSer.getAllBranches().subscribe(res=>{
      this.branches=res
    })
  }
  saveBranch(event:any){
    this.currentBranch=event.target.value
  }

  addmanager(fist:string,lastName:string,username:string,pass:string){
    let mana = new Manager(username,pass,fist,lastName,this.currentBranch)
    this.manaerServ.addManager(mana).subscribe(res=>{
      alert("מנהל סניף נוסף בהצלחה")
      this.ngOnInit()
    })
  }
 
}
