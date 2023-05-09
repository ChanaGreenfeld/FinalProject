import { Component } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
declare var $: any;

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'carousel-pictures',
  templateUrl: './carousel-pictures.component.html',
  styleUrls: ['./carousel-pictures.component.css', './swiper-bundle.min.css']
})
export class CarouselPicturesComponent {

  slides = [
    { image: 'assets/ForSliders/beautiful-air-clouds-coral-color.jpg' },
    { image: 'assets/ForSliders/environment-concept-hand-holding-young-plant-green-blur-with-sunshine-background.jpg' },
    { image: 'assets/ForSliders/happy-mothers-day-concept-top-view-pink-tulip-flowers-frame.jpg' },
    { image: 'assets/ForSliders/love-valentine-s-day-concept-made-from-pink-paper-hearts-text-pastel-background.jpg' }
  ]
  constructor () { }

  ngOnInit() {
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
