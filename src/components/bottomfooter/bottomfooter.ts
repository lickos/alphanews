import { Component } from '@angular/core';

@Component({
  selector: 'bottomfooter',
  templateUrl: 'bottomfooter.html'
})
export class BottomfooterComponent {
  showbottom: boolean = false;
  showUp: boolean = true;
  showDown: boolean = false;

  constructor() {}

  showthis() {
    this.showbottom = !this.showbottom;
    this.showUp = !this.showUp;
    this.showDown = !this.showDown;
  }
}
