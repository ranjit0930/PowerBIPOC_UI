import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  accessToken:String;
  constructor() { }

  setAccessToken(value:String){
    this.accessToken = value;
  }
  getAccessToken(){
    return this.accessToken;
  }
}
