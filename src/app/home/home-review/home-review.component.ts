import { Component } from '@angular/core';

@Component({
  selector: 'home-review',
  templateUrl: './home-review.component.html',
  styleUrls: ['./home-review.component.scss']
})
export class HomeReviewComponent {

  constructor() { }
  isOpen: boolean;

  onMouseEnter(review: number) {
    this.isOpen = true;
  }

  onMouseOut(review: number) {
    this.isOpen = false;
  }

}
