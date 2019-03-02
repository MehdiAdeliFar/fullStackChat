import {Component, OnInit} from '@angular/core';
import {Room} from '../../../Room';
import {BackendService} from '../../backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[];
  searchQuery = '';
  login: string;

  constructor(private bService: BackendService, private router: Router) {
  }

  getRooms() {
    this.bService.getAdminRooms().subscribe(room => this.rooms = room, er => {
      this.router.navigate(['login']);
    });
  }

  getQueryFilteredRooms(): Room[] {
    return this.rooms.filter(vid => vid.name.includes(this.searchQuery)
    );
  }

  getLoginName() {
    this.login = localStorage.getItem('name');
  }

  ngOnInit() {
    this.getRooms();
    this.getLoginName();
  }

  deleteRoom(room: Room) {
    this.bService.deleteRoom(room._id).subscribe(a => this.getRooms());
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
