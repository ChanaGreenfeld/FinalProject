import { Component } from '@angular/core';
import { Router } from '@angular/router';

class link { title: string; image: string; nav: string }

@Component({
  selector: 'links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  links: link[] = [{
    title: 'הנמכרים ביותר', 
    image: 'assets/babys/1.png', 
    nav: '/bestSellers'
  }, {
    title: 'הנחה',
    image: 'assets/babys/2.png',
    nav: '/sale'
  }, {
    title: 'Gift Card',
    image: 'assets/babys/3.png',
    nav: '/giftCard'
  }, {
    title: 'מוצרים חדשים',
    image: 'assets/babys/4.png',
    nav: '/newProducts'
  }, {
    title: 'אודות',
    image: 'assets/babys/5.png',
    nav: '/about'
  }]

  constructor (private router: Router) { }

  navigate(nav: string) {
    this.router.navigate([nav])
  }

}
