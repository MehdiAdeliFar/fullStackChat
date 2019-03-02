import { Component, OnInit } from '@angular/core';
import {ChatMessage} from '../../ChatMessage';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  thisUsername: string;
  chatMessages: ChatMessage[];

  constructor() { }

  ngOnInit() {
  }

}
