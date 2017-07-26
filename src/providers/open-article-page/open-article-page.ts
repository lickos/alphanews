import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticlePage } from '../../pages/article/article';

@Injectable()
export class OpenArticlePageProvider {

  constructor(public navCtrl: NavController) {
  }

  openArticle(item) {
    this.navCtrl.push(ArticlePage, {'item': item})
  }

}
