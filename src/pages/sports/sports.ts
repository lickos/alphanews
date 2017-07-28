import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Content } from 'ionic-angular';
import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html'
})
export class SportsPage {
  @ViewChild(Content) content: Content;
  page: any;
  url: string = 'https://alphanews.live/json/cat/6?page=';
  main: string;
  first: string;
  rest: string;
  backExist: boolean = false;
  forwardExist: boolean = true;
  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
    this.page = 0;
  }

  ionViewDidLoad() {
    this.getTheData(this.page);
  }

  getTheData(pageNo) {
    let url = this.url + pageNo.toString();
    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.main = data[0];
      data.shift();
      this.first = data[0];
      data.shift();
      this.rest = data;
    });
  }

  goToNextPage() {
    this.page += 1;
    this.backExist = true;
    this.getTheData(this.page);
    this.content.scrollToTop();
  }

  goToBackPage() {
    this.page -= 1;
    this.getTheData(this.page);
    this.content.scrollToTop();
    if (this.page == 0) {
      this.backExist = false;
    }
  }

  openArticle(article) {
    this.navCtrl.push(ArticlePage, { item: article });
  }
}
