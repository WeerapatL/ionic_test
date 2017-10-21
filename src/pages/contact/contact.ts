import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController,ItemSliding } from 'ionic-angular';
import { ParkDataProvider } from '../../providers/park-data/park-data';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
contactList:Array<any>=[];
isFiltered:boolean;
filterContact:Array<any>=[];

  constructor(private alertCtrl: AlertController,private contactData:ParkDataProvider,public navCtrl: NavController) {
  	this.contactData.loadQuote().subscribe(data=>{this.contactList=data});
  }


  addList=()=>{
  	let alert = this.alertCtrl.create({
    title: 'Add Contact',
    inputs: [
      {
        name: 'Name',
        placeholder: 'Please enter name'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {

        }
      },
      {
      	text: 'Add',
        role: 'add',
        handler: data => {
        	this.contactList.push({quote:"",author:data.Name});
        }
      }
    ]
  });

  alert.present();  		
  }

  removeList=(slidingItem:ItemSliding,contact:any)=>{
  		let alert = this.alertCtrl.create({
    		title: 'Confirm',
    		message: 'Do you want to delete? ',
    		buttons: [
      		{
       	 		text: 'Cancel',
        		role: 'cancel',
        		handler: () => {
        			slidingItem.close();
          		}
      		},
      		{
        		text: 'OK',
        		role: 'cancel',
        		handler: () => {
        		  	let index = this.contactList.indexOf(contact);
  					if(index>-1){
  						this.contactList.splice(index,1);
  						this.filterContact.splice(index,1);
  					}		
  					slidingItem.close();
        		}
      		}]
  		});
  		alert.present();
  }

  searchContact(event){
  	if(event.target.value){
  		if(event.target.value.length>0){
  			let filterJson = this.contactList.filter(row=>{
  					if(row.author.indexOf(event.target.value)!=-1){
  						return true;
  					}else{
  						return false;
  					}
  				}
  			);

  			this.isFiltered=true;
  			this.filterContact=filterJson;
  		}else{
  			this.isFiltered=false;
  		}
  	}else{
  		this.isFiltered=false;
  	}
  }


}

