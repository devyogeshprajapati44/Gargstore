import { Component, OnInit } from '@angular/core'
import { from } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
@Component({
    selector: 'user-registration',
    templateUrl: 'user-registration.html',
    styleUrls: ['user-registration.css']
})
export class UserregistrationComponent implements OnInit {
    registerForm: FormGroup;
    userData: any
    constructor(private _user: UserService, private fb: FormBuilder) {
        this.registerForm = fb.group({
            fname: ['', Validators.required],
            lname: ['' ,Validators.required],
            email: ['' ,Validators.required],
            address: ['' ,Validators.required],
            password: ['' ,Validators.required],
            confirmPass: ['' ,Validators.required],
            mobile: ['' ,Validators.required],
            pincode: ['' ,Validators.required]
        });
        this.userData = [];
    }
    ngOnInit(): void {

    }
    userRegistration() {
        if(this.registerForm.valid){
            this._user.userRegister(this.registerForm.value).subscribe(dt => {
                this.userData = dt;
                if (this.userData['success']['success'] === true) {
                    alert(this.userData['message']);
                } else {
                    alert(this.userData['message']);
                }
            });
        }
        }
}