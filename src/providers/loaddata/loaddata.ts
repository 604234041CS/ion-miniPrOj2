import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import { query } from '@angular/core/src/render3/instructions';

/*
  Generated class for the LoaddataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaddataProvider {
  searchroom: any;
  searchnamroom: any;
  searchroomname(val: any){
    throw new Error("Method not implemented.");
  }

  constructor(public http: HttpClient) {
    console.log('Hello LoaddataProvider Provider');
  }

getcondomiuium(){
  const url = 'http://localhost/todoslim3/public/condomiuium';
  return this.http.get(url);
}
getapartamen(){
  const url = 'http://localhost/todoslim3/public/apartamen';
  return this.http.get(url);
}
getmansion(){
  const url = 'http://localhost/todoslim3/public/mansion';
  return this.http.get(url);
}
getdorm(){
  const url = 'http://localhost/todoslim3/public/dorm';
  return this.http.get(url);
}
searchrooms(query){
  let url = 'http://localhost/todoslim3/public/search/'+query;
  return this.http.get(url);
}
loadrooms(){
  let url = 'http://localhost/todoslim3/public/roomlist';
  return this.http.get(url);
}
// loadprice_1(){
//   let url ='http://10.68.8.73/todoslim3/public/room/price20';
//   return this.http.get(url);
// }
//2500
// loadprice_2(){
//   let url ='http://10.68.8.73/todoslim3/public/room/price25';
//   return this.http.get(url);
// }
//3000
// loadprice_3(){
//   let url ='http://10.68.8.73/todoslim3/public/room/price30';
//   return this.http.get(url);
// }
showroom(name_ren){
let url = 'http://localhost/todoslim3/public/room'+name_ren;
return this.http.get(url);

}
}//
