import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParkDataProvider } from '../../providers/park-data/park-data';
import { QuoteDetailPage } from '../quote-detail/quote-detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
quotesList:Array<any>=[];
filterQuotes:Array<any>=[];
isFiltered:boolean;

  constructor(private loadQuote:ParkDataProvider,public navCtrl: NavController) {
  	this.isFiltered=false;
  	this.loadQuote.loadQuote().subscribe(data=>{ this.quotesList=data;},
  				  						 Error=>{ console.log("Error is "+Error)},
  					 					 ()=>{ console.log('read quotes Complete'+this.quotesList)}
  	);
  }

  searchQuote(event){
  	if(event.target.value){
  		if(event.target.value.length>0){
  			let filterJson = this.quotesList.filter(row=>{
  					if(row.author.indexOf(event.target.value)!=-1||row.quote.indexOf(event.target.value)!=-1){
  						return true;
  					}else{
  						return false;
  					}
  				}
  			);

  			this.isFiltered=true;
  			this.filterQuotes=filterJson;
  		}else{
  			this.isFiltered=false;
  		}
  	}else{
  		this.isFiltered=false;
  	}
  }


  itemTapped(quotesList){
  	this.navCtrl.push(QuoteDetailPage,quotesList);
  }	

  clearQuote(event){
  	event.target.value="";
  }

}
