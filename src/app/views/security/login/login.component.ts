import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

import { UserService } from './../../../services/user.service';
import { CurrentUser } from './../../../model/current-user.model';
import { SharedService } from './../../../services/shared.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = new FormControl('', [Validators.required, Validators.email]);
  user = new User('', '', '', '');
  shared: SharedService;
  mssage: string;

  constructor(
    private UserService: UserService,
    private router: Router) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit(): void {
  }

  login(){
    this.mssage = '';
    this.UserService.login(this.user).subscribe((userAuthentication: CurrentUser) => {
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.user;
      this.shared.user.profile = this.shared.user.profile.substring(5);
      this.shared.showTemplate.emit(true);
      this.router.navigate(['/']);
    }, err => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showTemplate.emit(false);
      this.mssage = 'Erro';
    });
  }

  // cancelarLogin(){
  //   this.mssage = '';
  //   this.user = new User('', '', '', '');
  //   window.location.href = '/login';
  //   window.location.reload();
  // }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}
