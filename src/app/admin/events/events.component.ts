import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../backend.service';
import {Router} from '@angular/router';
import {ChatEvent} from '../../../ChatEvent';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: ChatEvent[];
  login: string;

  constructor(private bService: BackendService, private router: Router) { }
  getEvents() {
    this.bService.getAdminEvents().subscribe(event => this.events = event, er => {
      this.router.navigate(['login']);
    });
  }
  getLoginName() {
    this.login = localStorage.getItem('name');
  }
  ngOnInit() {
    this.getEvents();
    this.getLoginName();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
