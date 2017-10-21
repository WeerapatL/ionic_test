import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'; 
/*
  Generated class for the ParkDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParkDataProvider {

  constructor(public http: Http) {
    console.log('Hello ParkDataProvider Provider');
  }

  getParkUrl():any{
  	return "http://web.sit.kmutt.ac.th/sanit/int493/";
  }

  getImageThumbsUrl():any{
  	return this.getParkUrl()+'assets/img/thumbs/';
  }

  getImageHeadersUrl():any{
  	return this.getParkUrl()+'assets/img/headers/';
  }

  loadParks():Observable<Parks[]>{
  	return this.http.get('http://web.sit.kmutt.ac.th/sanit/int493/parks.php')
 	       .map(response=>response.json().parks);
  }

  loadQuote():Observable<Quotes[]>{
  	return this.http.get('http://web.sit.kmutt.ac.th/sanit/quotes.php')
  		   .map(response=>response.json().quotes);
  }

}

export class Parks{
	park:string;
	state:string;
	image:string;
	description:string;
}

export class Quotes{
	quote:string;
	author:string;
}
