import {Component, OnInit, Input} from '@angular/core';
import {BackendService} from '../backend.service';
import {Room} from '../../Room';
import {Router} from '@angular/router';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Room[];
  login: string;
  @Input() searchQuery = '';

  constructor(private httpService: BackendService, private router: Router, private chatService: ChatService) {
  }

  getQueryFilteredRooms(): Room[] {
    return this.list.filter(vid => vid.name.includes(this.searchQuery)
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  getRooms() {
    this.httpService.getRooms().subscribe(roomList => {
      this.list = roomList;
    }, er => this.router.navigate(['login']));
  }

  getLoginName() {
    const item = localStorage.getItem('name');
    this.login = item;
  }

  ngOnInit() {
    this.getRooms();
    this.getLoginName();
  }

  connect() {
    this.chatService.connect(this.login);
  }

  join() {
    this.chatService.join( 'room1');
  }

  sendMessage() {
    this.chatService.sendMessage( 'room1', 'Hello message');
  }

  leave() {
    this.chatService.leave( 'room1');
  }

  disconnect() {
    this.chatService.disconnect();
  }
}
