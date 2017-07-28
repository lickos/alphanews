import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CyprusPage } from '../pages/cyprus/cyprus';
import { PolitikiPage } from '../pages/politiki/politiki';
import { ElladaPage } from '../pages/ellada/ellada';
import { DiethniPage } from '../pages/diethni/diethni';
import { SportsPage } from '../pages/sports/sports';
import { MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  showMe: boolean = false;
  showMe2: boolean = false;
  showYgeia: boolean = false;
  showPsich: boolean = false;
  showMeCyp: boolean = false;

  rootPage: any = HomePage;

  constructor(
    public platform: Platform,
    public menuCtrl: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openHome() {
    this.nav.push(HomePage);
  }

  openCyprus() {
    if (this.showMeCyp) {
      this.nav.push(CyprusPage);
      this.menuCtrl.close();
      this.showMeCyp = !this.showMeCyp;
    } else this.showMeCyp = !this.showMeCyp;
  }

  openPolitiki() {
    if (this.showMe) {
      this.nav.push(PolitikiPage);
    } else this.showMe = !this.showMe;
  }

  openEllada() {
    this.nav.push(ElladaPage);
  }

  openDiethni() {
    this.nav.push(DiethniPage);
  }

  openSports() {
    if (this.showMe2) {
      this.nav.push(SportsPage);
    } else this.showMe2 = !this.showMe2;
  }

  showSubItems() {
    this.showMe = !this.showMe;
  }

  showSubItems2() {
    this.showMe2 = !this.showMe2;
  }

  showYgeiaItems() {
    this.showYgeia = !this.showYgeia;
  }

  showPsichItems() {
    this.showPsich = !this.showPsich;
  }
}
