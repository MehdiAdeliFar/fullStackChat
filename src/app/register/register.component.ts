import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../backend.service';
import {LoginModel} from '../../loginModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login: string;
  password: string;
  error: string;
  data: any;

  constructor(private router: Router, private bService: BackendService) {
  }

  ngOnInit() {
  }

  register() {
    if (!this.login || this.login.length === 0 || !this.password || this.password.length === 0) {
      this.error = 'Enter both username and password field';
      return;
    }
    const loginModel: LoginModel = {login: this.login, password: this.password, _id: ''};
    this.bService.register(loginModel).subscribe(res => {
      if (!res) {
        this.error = 'can not register !!!';
        return;
      } else {
        this.data = res;
        if (!this.data.done) {
          this.error = 'can not register maybe username is exits!!!';
          return;
        } else {
          this.router.navigate(['login']);
        }
      }
    });


  }
}
