import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get('item')
  }

  ionViewDidLoad() {
    console.log(this.items);
  }

}
