import {Component, OnInit, Input} from '@angular/core';
import {BackendService} from '../backend.service';
import {Room} from '../../Room';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Room[];
  login: string;
  @Input() searchQuery = '';

  constructor(private httpService: BackendService, private router: Router) {
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
    let item = localStorage.getItem('name');
    this.login = item;
  }

  ngOnInit() {
    this.getRooms();
    this.getLoginName();
  }

}
