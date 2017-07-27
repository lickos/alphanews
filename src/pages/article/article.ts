import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  items: any;
  el:HTMLElement

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get('item')
  }

  ionViewDidLoad() {
    console.log(this.items);
    let artCont = this.items.content;
    this.el = document.getElementById('test');
    this.el.innerHTML = artCont;
  }

}
