import { Component } from '@angular/core';

@Component({
  selector: 'food-reservation',
  templateUrl: './food-reservation.component.html',
  styleUrls: ['./food-reservation.component.scss'],
})
export class FoodReservationComponent {
  private _selected: Date | null;
  get selected(): Date | null {
    return this._selected;
  }
  set selected(v) {
    this._selected = v;
    this.panelOpenState = false;
  }
  panelOpenState = false;
  private today = new Date();
  constructor() {}

  get selectedDate(): string {
    if (this.selected) {
      return `${this.selected.getFullYear()}-${
        this.selected.getMonth() + 1
      }-${this.selected.getDate()}`;
    }
    return '예약일을 선택하세요.';
  }

  dateFilter = (date: Date): boolean => {
    return this.today <= date;
  };
}
