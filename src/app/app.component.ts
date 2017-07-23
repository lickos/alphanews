import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CyprusPage } from '../pages/cyprus/cyprus';
import { PolitikiPage } from '../pages/politiki/politiki';
import { ElladaPage } from '../pages/ellada/ellada';
import { DiethniPage } from '../pages/diethni/diethni';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  showMe: boolean = false;
  showMe2: boolean = false;
  showYgeia: boolean = false;
  showPsich: boolean = false;

  rootPage: any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
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

  openCyprus() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(CyprusPage);
  }

  openPolitiki() {
    this.nav.push(PolitikiPage);
  }

  openEllada() {
    this.nav.push(ElladaPage);
  }

  openDiethni() {
    this.nav.push(DiethniPage);
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
