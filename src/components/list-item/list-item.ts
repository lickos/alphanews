import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {
  @Input('imgSrc') imgSrc;
  @Input('typehead') typeHeader;
  @Input('typeText') typeText;
  @Input('typeSubText') typeSubText;
  @Input('typeCat') typeCat;
  @Input('typeColorBadge') typeColorBadge;

  srcImg: string;
  classHead: string;
  classText: string;
  classSubText: string;
  classCat: string;
  classColorBadge: string;

  constructor() {
    this.srcImg = this.imgSrc;
    this.classHead = this.typeHeader;
    this.classText = this.typeText;
    this.classSubText = this.typeSubText;
    this.classCat = this.typeCat;
    this.classColorBadge = this.typeColorBadge;
  }
}
