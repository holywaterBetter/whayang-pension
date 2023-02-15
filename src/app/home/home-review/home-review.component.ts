import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'home-review',
  templateUrl: './home-review.component.html',
  styleUrls: ['./home-review.component.scss'],
})
export class HomeReviewComponent implements OnInit {
  @ViewChild('reviews', { static: true }) reviews: ElementRef<HTMLElement>;

  reviewBoxWidth: string;
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

  ngOnInit() {
    this._scrollBarWidth = screen.width - document.documentElement.clientWidth;
    console.warn(
      '_scrollBarWidth',
      this._scrollBarWidth,
      screen.width,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth,
      document.documentElement.scrollWidth,
      this.reviews.nativeElement.clientWidth
    );
    this._setReviewBoxWidth();
  }
  private _scrollBarWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.warn(
      'resize',
      this._scrollBarWidth,
      screen.width,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth,
      document.documentElement.scrollWidth,
      this.reviews.nativeElement.clientWidth,
      event.target.innerWidth,
      event.target.clientWidth,
      event.target.widdth
    );
  }

  _setReviewBoxWidth() {
    if (screen.width <= 640) {
      this.reviewBoxWidth = `calc(${this.reviews.nativeElement.clientWidth}px - 2rem`;
    } else if (screen.width <= 1023) {
      this.reviewBoxWidth = `calc((${this.reviews.nativeElement.clientWidth}px - 4rem) / 2)`;
    } else {
      this.reviewBoxWidth = `calc((${this.reviews.nativeElement.clientWidth}px - 6rem) / 3)`;
    }
    // if (screen.width <= 640) {
    //   this.reviewBoxWidth = `calc(100vw - 8rem - ${this._scrollBarWidth}px)`;
    // } else if (screen.width <= 1023) {
    //   this.reviewBoxWidth = `calc((100vw - 10rem - ${this._scrollBarWidth}px) / 2)`;
    // } else {
    //   this.reviewBoxWidth = `calc((100vw - 12rem - ${this._scrollBarWidth}px) / 3)`;
    // }
  }

  move(direction: boolean) {
    if (direction) {
      this.moveTurn++;
    } else {
      this.moveTurn--;
    }
    console.warn(this.moveTurn);
    this._setDisabledButton();
    this._setReviewBoxWidth();

    if (screen.width <= 640) {
      this.reviews.nativeElement.style.transform = `translate3d( calc(( ${this.reviewBoxWidth} + 2rem) * ${this.moveTurn}), 0px, 0px)`;
    } else if (screen.width <= 1023) {
      this.reviews.nativeElement.style.transform = `translate3d( calc(( ${this.reviewBoxWidth} + 2rem) * ${this.moveTurn}), 0px, 0px)`;
    } else {
      this.reviews.nativeElement.style.transform = `translate3d( calc(( ${this.reviewBoxWidth} + 2rem) * ${this.moveTurn}), 0px, 0px)`;
    }
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
