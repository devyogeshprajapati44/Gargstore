import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any;
  id: any;
  registerForm
  editPage: boolean;
  userPage: boolean;

  constructor(private _user: UserService, private fb: FormBuilder) {
    this.registerForm = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      pincode: ['', Validators.required]
    });
    this.editPage = false;
    this.userPage = true;
    this.data = [];
  }

  ngOnInit(): void {
    this.id = localStorage.getItem('userroll')
    this.id = JSON.parse((this.id));

    this.getUser();
  }
  getUser() {
    this._user.findUser().subscribe(user => {
      this.data = user
      this.data = this.data['data']
    });
  }
  singleId:any;
  editProfile(singleUser:any) {
    this.userPage = false;
    this.editPage = true;
    this.singleId=singleUser.id
    this.registerForm.patchValue(singleUser);
  }
 
  updateUser() {
    this.registerForm.value.id = this.singleId;
    this._user.updateUser(this.registerForm.value).subscribe(data => {
      alert('User updated !')
      this.userPage = true;
      this.editPage = false;
      this.getUser();
    });
  }

  deleteUser(deleteId:any) {
    this._user.deleteUser({ id: deleteId }).subscribe(del => {
      console.log(del);
      alert('Deleted !');
      this.getUser();
    });

  }
}
