import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';
import { FavoritesPage } from '../../pages/favorites/favorites';

@Component({
  selector: 'alphaheader',
  templateUrl: 'alphaheader.html'
})
export class AlphaheaderComponent {
  constructor(public navCtrl: NavController) {}

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

  openFavs() {
    this.navCtrl.push(FavoritesPage);
  }
}
