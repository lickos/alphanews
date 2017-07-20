import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the WeatherComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherComponent {
  text: any;
  source: any;
  latitude: any;
  longitude: any;

  constructor(public http: Http, private geolocation: Geolocation) {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
      })
      .then(() => {
        let url =
          'http://api.apixu.com/v1/current.json?key=c1a5dde8e7e54b13ad7175606172007&q=' +
          this.latitude +
          ',' +
          this.longitude;
        this.http.get(url).map(res => res.json()).subscribe(data => {
          console.log(data);
          this.text = data.location.name;
          this.source = data.current.condition.icon;
          console.log(this.source);
        });
      });
  }
}
