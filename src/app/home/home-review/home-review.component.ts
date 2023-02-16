import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'home-review',
  templateUrl: './home-review.component.html',
  styleUrls: ['./home-review.component.scss'],
})
export class HomeReviewComponent {
  @ViewChild('reviews', { static: true }) reviews: ElementRef<HTMLElement>;

  ReviewList = ReviewList;
  disabledLeftButton: boolean;
  disabledRightButton: boolean;

  constructor() {
    this._setDisabledButton();
  }
  private _setDisabledButton() {
    this.disabledLeftButton = this.moveTurn === 0;
    if (screen.width <= 640) {
      this.disabledRightButton = this.moveTurn === -4;
    } else if (screen.width <= 1023) {
      this.disabledRightButton = this.moveTurn === -3;
    } else {
      this.disabledRightButton = this.moveTurn === -2;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.move(0);
  }

  get reviewBoxWidth(): string {
    if (document.documentElement.scrollWidth <= 640) {
      return `calc(${this.reviews.nativeElement.clientWidth}px - 2rem`;
    } else if (document.documentElement.scrollWidth <= 1023) {
      return `calc((${this.reviews.nativeElement.clientWidth}px - 4rem) / 2)`;
    } else {
      return `calc((${this.reviews.nativeElement.clientWidth}px - 6rem) / 3)`;
    }
  }

  move(direction: number) {
    this.moveTurn += direction;
    this.reviews.nativeElement.style.transform = `translate3d( calc(( ${this.reviewBoxWidth} + 2rem) * ${this.moveTurn}), 0px, 0px)`;
    this._setDisabledButton();
  }
  private moveTurn: number = 0;
}

const ReviewList = [
  {
    hover: false,
    href: 'https://blog.naver.com/vhfpqj327/222791258320',
    img: '/assets/review1.jpg',
    date: '2022.06.29 방문',
    tag: '#펜션 #평상 #백숙',
    description: '완벽했던 하루의 화양계곡펜션❤',
  },
  {
    hover: false,
    href: 'https://blog.naver.com/vhfpqj327/222791258320',
    img: '/assets/review1.jpg',
    date: '2022.06.29 방문',
    tag: '#펜션 #평상 #백숙',
    description: '완벽했던 하루의 화양계곡펜션❤',
  },
  {
    hover: false,
    href: 'https://blog.naver.com/vhfpqj327/222791258320',
    img: '/assets/review1.jpg',
    date: '2022.06.29 방문',
    tag: '#펜션 #평상 #백숙',
    description: '완벽했던 하루의 화양계곡펜션❤',
  },
  {
    hover: false,
    href: 'https://blog.naver.com/vhfpqj327/222791258320',
    img: '/assets/review1.jpg',
    date: '2022.06.29 방문',
    tag: '#펜션 #평상 #백숙',
    description: '완벽했던 하루의 화양계곡펜션❤',
  },
  {
    hover: false,
    href: 'https://blog.naver.com/vhfpqj327/222791258320',
    img: '/assets/review1.jpg',
    date: '2022.06.29 방문',
    tag: '#펜션 #평상 #백숙',
    description: '완벽했던 하루의 화양계곡펜션❤',
  },
];
