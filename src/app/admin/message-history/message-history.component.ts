import {Component, OnInit} from '@angular/core';
import {ChatMessage} from '../../../ChatMessage';
import {BackendService} from '../../backend.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.css']
})
export class MessageHistoryComponent implements OnInit {
  login: string;
  messages: ChatMessage[];

  constructor(private bService: BackendService, private router: Router, private route: ActivatedRoute) {
  }

  getMessages() {
    const roomName = this.route.snapshot.paramMap.get('name');
    if (roomName != null) {
      this.bService.getMessagesByRoomName(roomName).subscribe(v => this.messages = v);
    } else {
      this.bService.getMessages().subscribe(v => this.messages = v);
    }
  }
  getLoginName() {
    this.login = localStorage.getItem('name');
  }
  ngOnInit() {
    this.getMessages();
    this.getLoginName();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
