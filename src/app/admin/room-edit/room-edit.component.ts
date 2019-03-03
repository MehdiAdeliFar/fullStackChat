import {Component, OnInit} from '@angular/core';
import {Room} from '../../../Room';
import {BackendService} from '../../backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
  resetVar = false;
  selectedRoom: Room;
  id = '-1';
  error: string;
  private login: string;

  constructor(private location: Location, private bService: BackendService, private router: Router, private route: ActivatedRoute) {
  }

  getRoom() {
    const routeId = this.route.snapshot.paramMap.get('id');
    if (routeId != null) {
      this.id = routeId;
      this.bService.getRoom(this.id).subscribe(v => this.selectedRoom = v);
    } else {
      this.selectedRoom = new Room();
    }
  }

  getLoginName() {
    this.login = localStorage.getItem('name');
  }

  ngOnInit() {
    this.getRoom();
    this.getLoginName();
  }

  getBack() {
    this.location.back();
  }

  updateRoom() {
    this.error = undefined;
    if (!this.selectedRoom.name) {
      this.error = 'Please Enter the name of Room!';
      return;
    }
    if (this.selectedRoom._id != null) {
      this.bService.updateRoom(this.selectedRoom).subscribe(a => {
        this.router.navigate(['rooms']);
      }, er => this.router.navigate(['login']));
    } else {
      this.bService.addRoom(this.selectedRoom).subscribe(a => this.router.navigate(['rooms']), er => this.router.navigate(['login']));
    }
  }

}
