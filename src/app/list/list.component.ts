import {Component, OnInit, Input} from '@angular/core';
import {BackendService} from '../backend.service';
import {Room} from "../../Room";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Room[];
  @Input() searchQuery = '';

  constructor(private httpService: BackendService) {
  }

  getQueryFilteredRooms(): Room[] {
    return this.list.filter(vid => vid.name.includes(this.searchQuery)

    );
  }

  getRooms() {
    this.httpService.getRooms().subscribe(roomList => {
      this.list = roomList;
    });
  }

  ngOnInit() {
    this.getRooms();
  }

}
