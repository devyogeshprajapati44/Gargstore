import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { UserService } from '../user.service';
@Component({
    selector:'user-login',
    templateUrl: './user-login.html',
    styleUrls: ['./user-login.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  userdata:any
    constructor(private rout:Router,private fb: FormBuilder, private _user: UserService){
  this.userdata=[];
        this.loginForm = fb.group({

            username: ['', Validators.required],
            password: ['' ,Validators.required],

       });
       
        

    }
    ngOnInit():void{


    }
    userlogin(){
this._user.userlogin(this.loginForm.value).subscribe(dt=>{
    this.userdata=dt
    localStorage.setItem('userroll',JSON.stringify(this.userdata['data'][0].id))
    console.log(this.userdata['data'][0])    
    this.rout.navigateByUrl('/dashboard');
})
    }
    registrationload(){
        this.rout.navigateByUrl('/registration')
    }
}