import { Component, Input, OnInit } from '@angular/core'
import { MapDirectionsService } from '@angular/google-maps'

@Component({
  selector: 'app-show-way',
  templateUrl:'./show-way.component.html',
  styleUrls: ['./show-way.component.css'],
})
export class ShowWayComponent implements OnInit {
  directionsResults$!: google.maps.DirectionsResult | undefined 
  mapDirectionsRander = new google.maps.DirectionsRenderer()
  display: any
  zoom = 15

  options = {
    componentRestrictions: {
      country: ["IL"]
    }
  }

  @Input()
  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0,
  }

  @Input()
  destination: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0,
  }
  @Input()
  travelMode!:google.maps.TravelMode

  constructor(private mapDirectionsService: MapDirectionsService) {}

  ngOnInit(): void {
    const request: google.maps.DirectionsRequest = {
      origin: this.center,
      destination: this.destination,
      travelMode: this.travelMode
    };
    this.mapDirectionsService.route(request).subscribe(data=>{
      this.directionsResults$=data.result
    });
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON()
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON()
  }

  markerOptions: google.maps.MarkerOptions = {
    icon: '../../../assets/icons8-google-maps-48.png',
    draggable: false,
  }
}
