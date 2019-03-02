import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../../backend.service';
import {LoginModel} from '../../../loginModel';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  login: string;
  password: string;
  error: string;
  data: any;
  const;


  constructor(private router: Router, private bService: BackendService) {
  }

  ngOnInit() {
  }

  authenticate() {
    if (!this.login || this.login.length === 0 || !this.password || this.password.length === 0) {
      this.error = 'Enter both login and password field';
      return;
    }
    this.error = undefined;
    const adminlogin: LoginModel = {login: this.login, password: this.password, _id: ''};
    this.bService.login(adminlogin).subscribe(res => {
      if (!res) {
        this.error = 'can not login';
        return;
      } else {
        this.data = res;
        if (!this.data.auth) {
          this.error = this.data.msg;
          this.login = '';
          this.password = '';
          return;
        }
        if (this.data.auth) {
          localStorage.setItem('token', this.data.token);
          localStorage.setItem('name', this.login);
          this.error = undefined;
          this.router.navigate(['adminlist']);
        }
      }

    });

  }
}
