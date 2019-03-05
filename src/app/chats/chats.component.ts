import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from '../../ChatMessage';
import {ChatService} from '../chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  thisUsername: string;
  chatMessages: ChatMessage[] = [];
  login: string;
  room: string;
  @Input() messageText = '';

  constructor(private chatService: ChatService, private router: Router) {
    this.chatService.getMessage().subscribe(data => {
      this.chatMessages.push(data);
      const el = document.getElementById('token');
      el.scrollIntoView();
    });

  }

  ngOnInit() {
    this.getLoginName();
    this.getRoomName();
  }

  getLoginName() {
    const item = localStorage.getItem('name');
    this.login = item;
  }

  getRoomName() {
    this.room = this.chatService.roomName;
    if (!this.chatService.socket) {
      this.router.navigate(['login']);
    } else {
      if (!this.chatService.roomName || this.room.length < 1) {
        this.logout();
        return;
      }
    }
  }

  logout() {
    localStorage.clear();
    this.chatService.disconnect();
    this.router.navigate(['login']);
  }

  sendMessage() {
    if (this.messageText.length < 1) { return; }
    this.chatService.sendMessage(this.messageText);
    this.messageText = '';
    const el = document.getElementById('token');
    el.scrollIntoView();
  }

  leave() {
    this.chatService.leave();
    this.router.navigate(['roomSelect']);
  }

}
