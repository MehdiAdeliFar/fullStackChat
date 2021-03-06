import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../../loginModel';
import {Router} from '@angular/router';
import {BackendService} from '../backend.service';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  error: string;
  data: any;

  constructor(private router: Router, private bService: BackendService, private chatService: ChatService) {
  }

  ngOnInit() {
  }

  connect() {
    this.chatService.connect(this.login);
  }

  authenticate() {
    if (!this.login || this.login.length === 0 || !this.password || this.password.length === 0) {
      this.error = 'Enter both username and password field';
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
          this.error = this.data.errorMsg;
          this.login = '';
          this.password = '';
          return;
        }
        if (this.data.auth) {
          localStorage.setItem('token', this.data.token);
          localStorage.setItem('name', this.login);
          this.error = undefined;
          if (this.data.isAdmin) {
            this.router.navigate(['rooms']);
          } else {
            this.connect();
            this.router.navigate(['roomSelect']);
          }

        }
      }

    });

  }
}
