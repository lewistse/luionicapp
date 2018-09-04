import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
openDetails() {
    this.navCtrl.push('FilmDetailsPage');
    this.navCtrl.push('FilmDetailsPage');
    this.navCtrl.push("PeoplePage");
    this.navCtrl.push("PlanetsPage");
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
