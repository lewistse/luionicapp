import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myVariable: string = 'The force is with me! hello world';
    
  constructor(public navCtrl: NavController) {

  }

    updateMyValue() {
    this.myVariable = 'Now the force is even stronger!';
  }
    
}
