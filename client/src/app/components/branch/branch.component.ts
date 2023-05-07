import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Address } from 'ngx-google-places-autocomplete/objects/address'
import { branch } from 'src/app/classes/branch'
import { BranchesService } from 'src/app/services/branches.service'
import { MatDialog } from '@angular/material/dialog';
import { ShowWayComponent } from '../show-way/show-way.component'
import { UsersService } from 'src/app/services/users.service'
import { User, currentUser } from 'src/app/classes/user'


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
  text:string='';
  name:string='';

  options = {
    componentRestrictions: { 
      country: ['IL'],
    },
  }
  origion = {
    lat:0,
    lng:0,
  }
  destination = {
    lat:0,
    lng:0,
  }

  modes=["Driving","Walking","Bycicling","Transit"]
  mode= google.maps.TravelMode.DRIVING ;
  constructor(private branchServ: BranchesService , private router:Router ,private Arouter : ActivatedRoute, public dialog: MatDialog, private userServ:UsersService) {}

  user:currentUser
  ngOnInit(): void {
    this.user=this.userServ.currentUser
    this.branchServ.getAllBranches().subscribe((result) => {
      ;(this.branches = result), (this.filterBranches = result)
    })
    this.Arouter.params.subscribe(
      data=>{ 
        this.name=data['name']
      this.destination.lat=data['lat']
      this.destination.lng=data['lng']    
      }
    )
  }

  openLocationDialog() {
    const dialogRef = this.dialog.open(ShowWayComponent);
    let instance = dialogRef.componentInstance;
    instance.center = this.origion;
    instance.destination=this.destination;
    instance.travelMode=this.mode;
  
  }

  searchFilter(event: any): void {
    this.searchWord = event.target.value
    if (this.searchWord) {
      this.filterBranches = this.branches.filter((l) =>
        l.name.startsWith(this.searchWord),
      )
    } else this.filterBranches = this.branches
  }

  onSelect(mode:string){
    if(mode=="Walking")
    this.mode=google.maps.TravelMode.WALKING
    else if(mode=="Bycicling")
    this.mode=google.maps.TravelMode.BICYCLING
    else if(mode=="Transit")
    this.mode=google.maps.TravelMode.TRANSIT
    else this.mode=google.maps.TravelMode.DRIVING
  }

    open() {
      this.show = false    
    }

    showShortestWay(){
     this.branchServ.search(this.text, this.branches).subscribe((result) => {
       this.destination.lat = result.lat;
       this.destination.lng = result.lng;
        this.openLocationDialog()
      })
    }

  changeOrigin(place:Address){
    this.origion.lat=place.geometry.location.lat()
    this.origion.lng=place.geometry.location.lng()
    this.text = place.formatted_address    
  }

  pay(){
    this.router.navigate(['payment'],{ queryParams: { from: 'sh' }})
  }
}
