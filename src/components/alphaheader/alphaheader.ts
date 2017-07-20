import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'alphaheader',
  templateUrl: 'alphaheader.html'
})
export class AlphaheaderComponent {
  constructor(public navCtrl: NavController) {}

  openHome() {
    this.navCtrl.push(HomePage);
  }

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

  openFavs() {
    this.navCtrl.push(FavoritesPage);
  }
}
