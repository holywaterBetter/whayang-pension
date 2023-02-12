import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'home-review',
  templateUrl: './home-review.component.html',
  styleUrls: ['./home-review.component.scss']
})
export class HomeReviewComponent {
  hover: boolean[] = [false,false,false,false,false, false];
  @ViewChild("reviews", {static: true}) reviews: ElementRef<HTMLElement>
  widthReview1: number;
  heightReview1: number;
  constructor() {
    console.warn("screen.width", screen.width);
    this.widthReview1 = screen.width*0.25;
    this.heightReview1 = screen.height * 0.6;
  }

  onMouseEnter(review: number) {
  this.hover[review] = true;
  }

  onMouseOut(review: number) {
    this.hover[review] = false;
  }

  move(direction: boolean){
    if(direction){
      this.m++;
    }
    else{
      this.m--;
    }
    this.reviews.nativeElement.style.transform = "translate3d( calc(( (100vw - 11rem) / 3 + 2rem) * " + this.m + "), 0px, 0px)";
  }
  private m: number = 0;
}
