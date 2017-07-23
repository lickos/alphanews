import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CyprusPage } from '../pages/cyprus/cyprus';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SearchPage } from '../pages/search/search';
import { UsefulPage } from '../pages/useful/useful';
import { PolitikiPage } from '../pages/politiki/politiki';
import { ElladaPage } from '../pages/ellada/ellada';
import { DiethniPage } from '../pages/diethni/diethni';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListItemComponent } from '../components/list-item/list-item';
import { AlphaheaderComponent } from '../components/alphaheader/alphaheader';
import { WeatherComponent } from '../components/weather/weather';
import { ReplacequotesPipe } from '../pipes/replacequotes/replacequotes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CyprusPage,
    FavoritesPage,
    SearchPage,
    ListItemComponent,
    UsefulPage,
    AlphaheaderComponent,
    WeatherComponent,
    PolitikiPage,
    ReplacequotesPipe,
    ElladaPage,
    DiethniPage
  ],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ElladaPage,
    CyprusPage,
    FavoritesPage,
    SearchPage,
    UsefulPage,
    PolitikiPage,
    DiethniPage
  ],
  providers: [StatusBar, SplashScreen, Geolocation, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
