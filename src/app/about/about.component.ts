import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @ViewChild('TopImage') myImg: ElementRef<HTMLImageElement>;
  @ViewChild('Header') myText: ElementRef<HTMLDivElement>;

  currentIndex: number = 0;
  images: string[] = [
    '/assets/pension.jpg',
    '/assets/valley1.jpg',
    '/assets/valley2.jpg',
    '/assets/valley3.jpg',
    '/assets/valley4.jpg',
  ];

  updateTextPosition() {
    const img = this.myImg.nativeElement;
    const height =
      window.screen.availHeight < img.height
        ? window.screen.availHeight
        : img.height;
    this.myText.nativeElement.style.top = `calc(${height / 2}px)`;
  }

  onSliderThumbClick(index: number) {
    this.currentIndex = index;
  }

  @HostListener('window:resize')
  onResize() {
    this.updateTextPosition();
  }
}
