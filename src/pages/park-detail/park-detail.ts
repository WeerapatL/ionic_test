import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParkDataProvider } from '../../providers/park-data/park-data';
/**
 * Generated class for the ParkDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-park-detail',
  templateUrl: 'park-detail.html',
})

export class ParkDetailPage {
parksList:Array<any>=[];
getImgHeaderUrl:string;
getImgThumbsUrl:string;
park:any={image:''};

  constructor(private parkData:ParkDataProvider,public navCtrl: NavController, public navParams: NavParams) {
  	this.parkData.loadParks().subscribe(data =>{this.parksList=data});
  	this.getImgHeaderUrl = parkData.getImageHeadersUrl();
  	this.park=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkDetailPage');
  }

}
