import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  images = [
    { source: 'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg', alt: 'Description de l\'image 1' },
    { source: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp', alt: 'Description de l\'image 2' },
    { source: 'https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg', alt: 'Description de l\'image 3' }
  ];
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
 
}
