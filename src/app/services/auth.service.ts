import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loggedIn:boolean=false;

  email:string='nishanth@ibm.com'
  password:string='pass1234'

  login(email:string,password:string){
    if(this.email==email && this.password==password){
    this.loggedIn=true;
    console.log('pass');

    }
    else{
      this.loggedIn=false;
      console.log('fail');
      alert('please enter correct Password')
    }
  }
  IsLoggedIn(){
    return this.loggedIn
  }
}
