import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
   el: HTMLElement;
   el2: HTMLElement;
   el3: HTMLElement;

  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {
 
  }
 
  ionViewDidEnter() {
    this.el = document.getElementById("firstImage");
    this.el2 = document.getElementById("secondImage");
    this.el3 = document.getElementById("thirdImage");
    this.el.style.top = "20%";
    this.el2.style.top = "25%";
    this.el3.style.top = "30%";

 
    this.splashScreen.hide();
 
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 6000);
 
  }
 
}