import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuoteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote-detail',
  templateUrl: 'quote-detail.html',
})
export class QuoteDetailPage {
quoteDetail:{quote:'',author:''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.quoteDetail=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteDetailPage');
  }

}
