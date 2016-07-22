import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap';
import { Carousel } from './carousel';

@Component({
    moduleId: module.id,
    selector: 'sd-carousel',
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css'],
    directives: [CAROUSEL_DIRECTIVES]
})
export class CarouselComponent implements OnInit {
    
    public myInterval: number = 4000;
    public noWrapSlides:boolean = false;
    public slides:Array<any> = [];

    constructor() { }

    ngOnInit() { 
        let first = new Carousel('./assets/images/IMG_0526.JPG', 'Image1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam')
        let second = new Carousel('./assets/images/IMG_0530.JPG', 'Image2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam')
        let third = new Carousel('./assets/images/IMG_0533.JPG', 'Image3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam')
        let fourth = new Carousel('./assets/images/IMG_0546.JPG', 'Image4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam')
        this.slides.push(first, second, third, fourth);
    }

}