import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { branch } from 'src/app/classes/branch'
import { BranchesService } from 'src/app/services/branches.service'

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit {
  branches: Array<branch> = []
  filterBranches: Array<branch> = []
  searchWord: string = ''
  show: boolean = true

  searchControl = new FormControl()

  options = {
    componentRestrictions: { 
      country: ['IL'],
    },
  }

  constructor(private branchServ: BranchesService , private router:Router) {}

  ngOnInit(): void {
    this.branchServ.getAllBranches().subscribe((result) => {
      ;(this.branches = result), (this.filterBranches = result)
    })
  }

  searchFilter(event: any): void {
    this.searchWord = event.target.value
    if (this.searchWord) {
      this.filterBranches = this.branches.filter((l) =>
        l.name.startsWith(this.searchWord),
      )
    } else this.filterBranches = this.branches
  }

  showShortestWay() {
    this.show = false    
  }

  shortestWay(){
    const textSearch = this.searchControl.value;
    debugger
    this.branchServ.search(textSearch, this.branches).subscribe((result) => {
      debugger
      this.router.navigate(['showWay'])
    })
  }


}
