import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-com',
  templateUrl: 'com.html',
})
export class ComPage {
  result:any={};
  value;
  showroom1:any=[];
  showroom2:any=[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public apix:LoaddataProvider) {
    this.result.room1 = "";
    this.result.room2 = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComPage');
    this.apix.loadrooms().subscribe(data=>{
      this.value = data;
    });
    
   }
   getroomview(){
    if(this.result.room1!=""){
      this.apix.showroomx(this.result.room1).subscribe(data=>{
        this.showroom1 = data;
        console.log(this.showroom1);
      });

    }if(this.result.room2 !=""){
      this.apix.showroomx(this.result.room2).subscribe(val=>{
        this.showroom2 = val;
        console.log(this.showroom2);
      });
  }
}

   
  }//


