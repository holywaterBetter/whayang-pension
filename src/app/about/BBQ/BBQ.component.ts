import { Component } from '@angular/core';

@Component({
  selector: 'BBQ',
  templateUrl: './BBQ.component.html',
  styleUrls: ['../about.component.scss'],
})
export class BBQComponent {
  constructor() {}

  BBQIndex: number = 0;
  BBQImages: string[] = [
    '/assets/dining-place.jpg',
    '/assets/fire.jpg',
    '/assets/fire2.jpg',
  ];
}
