import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

  slides = [
    {img: "https://dummyimage.com/350x150/423b42/fff"},
    {img: "https://dummyimage.com/350x150/2a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/1a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/7a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/9a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/5a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  slickInit(e:any) {
    console.log('slick initialized',e);
  }

  breakpoint(e:any) {
    console.log('breakpoint',e);
  }

  afterChange(e:any) {
    console.log('afterChange',e);
  }

  beforeChange(e:any) {
    console.log('beforeChange',e);
  }

}
