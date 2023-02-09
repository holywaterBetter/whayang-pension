import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  isOpen: boolean;
  white: boolean;

  constructor(){
  }

  @HostListener("window:scroll", ['$event.target'])test(){
    if(window.scrollY > 0.5){
      this.white = true;
    } else {
      this.white = false;
    }
  }

  onMouseEnter() {
    this.isOpen = true;
  }

  onMouseOut() {
    this.isOpen = false;
  }
}
