import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';

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
          'http://api.apixu.com/v1/forecast.json?key=c1a5dde8e7e54b13ad7175606172007&days=3&q=' +
          this.latitude +
          ',' +
          this.longitude;
        this.http.get(url).map(res => res.json()).subscribe(data => {
          this.text = data;
          console.log(data);
        });
      });
  }
}
