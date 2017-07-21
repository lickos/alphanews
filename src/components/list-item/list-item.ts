import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {
  @Input('imgSrc') imgSrc;
  @Input('typehead') typeHeader;
  @Input('typeText') typeText;

  srcImg: string;
  classHead: string;
  classText: string;

  constructor() {
    this.srcImg = this.imgSrc;
    this.classHead = this.typeHeader;
    this.classText = this.typeText;
  }
}
