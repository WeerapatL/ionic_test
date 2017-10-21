import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParkDataProvider } from '../../providers/park-data/park-data';
import { ParkDetailPage } from '../park-detail/park-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
parksList:Array<any>=[];
getImgHeaderUrl:string;
getImgThumbsUrl:string;
park:any={image:''};
isFiltered:boolean;
filterParks:Array<any>=[];

  constructor(private parkData:ParkDataProvider,public navCtrl: NavController) {
  	this.parkData.loadParks().subscribe(data =>{this.parksList=data});
  	this.getImgThumbsUrl = parkData.getImageThumbsUrl();
  }

  searchPark(event){
  	if(event.target.value){
  		if(event.target.value.length>0){
  			let filterJson = this.parksList.filter(row=>{
  					if(row.park.indexOf(event.target.value)!=-1||row.state.indexOf(event.target.value)!=-1){
  						return true;
  					}else{
  						return false;
  					}
  				}
  			);

  			this.isFiltered=true;
  			this.filterParks=filterJson;
  		}else{
  			this.isFiltered=false;
  		}
  	}else{
  		this.isFiltered=false;
  	}
  }

  itemTapped(park){
  	this.navCtrl.push(ParkDetailPage,park);
  }

}
