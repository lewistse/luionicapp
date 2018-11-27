import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

    films: Observable<any>;
//constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    
        this.films = this.apiProvider.getFilms();
        
//    this.films = this.httpClient.get('https://swapi.co/api/films');
    this.films
    .subscribe(data => {
      console.log('my data: ', data);
    })
  }
openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
//    this.navCtrl.push('FilmDetailsPage', {filmId: 2});
//    this.navCtrl.push('FilmDetailsPage');
//    this.navCtrl.push("PeoplePage");
//    this.navCtrl.push("PlanetsPage");
    //this.navCtrl.parent.select(2);

    //this.navCtrl.pop();
    //this.navCtrl.pop();
  }
 
  goToPlanets() {
    this.navCtrl.parent.select(2);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

}
