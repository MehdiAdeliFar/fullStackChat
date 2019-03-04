import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket;

  constructor() {
  }

  connect(username: string) {
    this.socket = io('localhost:3000', {query: `username=${username}`});
  }

  disconnect() {
    this.socket.disconnect();
  }

  join( roomName: string) {
    this.socket.emit('join', { roomName: roomName});
  }

  sendMessage( roomName: string, message: string) {
    this.socket.emit('send-message', { roomName: roomName, message: message});
  }

  getMessage() {
    return Observable.create(observer => {
      this.socket.on('new-message', data => {
        observer.next(data);
      });
    });
  }

  leave( room1: string) {
    this.socket.emit('leave', { roomName: room1});
  }
}
