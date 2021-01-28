import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {URL} from '../app/url'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _https:HttpClient) {
   
   }
   userRegister(data:any){
    return this._https.post(URL.user_registraion,data);
   }
   userlogin(data:any){
    return this._https.post(URL.user_login,data);
   }
   findUser(){
    return this._https.get(URL.get_user);
   }
   updateUser(data:any){
    return this._https.post(URL.update_user,data);
   }
   deleteUser(data:any){ 
    return this._https.post(URL.delete_user,data);
   }

  }
