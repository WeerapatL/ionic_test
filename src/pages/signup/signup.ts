import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
name:string;


  constructor(private alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  alertConfirm(email){
  	let alert = this.alertCtrl.create({
  		title:'Welcome!',
  		subTitle:'Hello  '+this.name+
  		' your email is  ' +email,
  		buttons:[{
  			text:'OK',
  			role:'OK',
  			handler:()=>{
  				this.navCtrl.push(LoginPage);
  			}
  		}]
  	});
  	alert.present();
  }
}
