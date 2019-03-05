import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import {leave} from '@angular/core/src/profile/wtf_impl';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket;
  roomName: string;

  constructor() {
  }

  connect(username: string) {
    this.socket = io('localhost:3000', {query: `username=${username}`});
  }

  disconnect() {
    this.leave();
    this.socket.disconnect();
  }

  join(roomName: string) {
    this.socket.emit('join', {roomName: roomName});
    this.roomName = roomName;
  }

  sendMessage(message: string) {
    this.socket.emit('send-message', {roomName: this.roomName, message: message});
  }

  getMessage() {
    return Observable.create(observer => {
      this.socket.on('new-message', data => {
        observer.next(data);
      });
    });
  }

  leave() {
    this.socket.emit('leave', {roomName: this.roomName});
    this.roomName = undefined;
  }
}
