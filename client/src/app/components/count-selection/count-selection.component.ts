import { Component, Input } from '@angular/core';

@Component({
  selector: 'count-selection',
  templateUrl: './count-selection.component.html',
  styleUrls: ['./count-selection.component.css']
})
export class CountSelectionComponent {
  @Input() count: number = 1
  

  constructor () { }

  updateCount(value: number) {
    if (this.count + value > 0) {
      this.count += value
    }
  }
}
