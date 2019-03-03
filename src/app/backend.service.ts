import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Video} from '../video';
import {Customer} from '../customer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginModel} from '../loginModel';
import {Room} from '../Room';
import {ChatEvent} from '../ChatEvent';
import {ChatMessage} from '../ChatMessage';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiAddress = 'http://localhost:3000/api';
  data: any;


  getCustomersForReserve(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiAddress + '/customer/get', httpOptions);
  }

  getCustomers(): Observable<Customer[]> {

    const item = localStorage.getItem('token') != null ? localStorage.getItem('token') : '';

    const myHttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'x-access-token': item})
    };
    return this.http.get<Customer[]>(this.apiAddress + '/customer', myHttpOptions);
  }

  getVideo(id: string): Observable<Video> {

    // return of(this.videos.find(v => v._id === id));
    return this.http.get<Video>(`${this.apiAddress}/video/${id}`, httpOptions);
  }

  updateVideo(vid: Video) {
    const item = localStorage.getItem('token') != null ? localStorage.getItem('token') : '';

    const myHttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'x-access-token': item})
    };
    return this.http.post(`${this.apiAddress}/video/${vid._id}`, vid, myHttpOptions);
  }

  addVideo(vid: Video) {
    const item = localStorage.getItem('token') != null ? localStorage.getItem('token') : '';

    const myHttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'x-access-token': item})
    };
    return this.http.put(this.apiAddress + '/video', JSON.stringify(vid), myHttpOptions);
  }

  deleteVideo(id: string) {
    const item = localStorage.getItem('token') != null ? localStorage.getItem('token') : '';

    const myHttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'x-access-token': item})
    };
    return this.http.delete(`${this.apiAddress}/video/${id}`, myHttpOptions);
  }

  login(loginModel: LoginModel) {

    return this.http.post(this.apiAddress + '/auth/', loginModel, httpOptions);
  }


  constructor(private http: HttpClient) {
  }

  getAdminVideos() {
    const item = localStorage.getItem('token') != null ? localStorage.getItem('token') : '';

    const myHttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'x-access-token': item})
    };
    return this.http.get<Video[]>(this.apiAddress + '/video/adminList', myHttpOptions);
  }

  reserveVideo(vid: Video) {
    return this.http.post(`${this.apiAddress}/video/reserve/${vid._id}`, vid, httpOptions);
  }

  getRooms(): Observable<Room[]> {

    return this.http.get<Room[]>(this.apiAddress + '/room', this.getHttpOptions());
  }

  private getHttpOptions() {
    const item = localStorage.getItem('token') != null ? localStorage.getItem('token') : '';

    return {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'x-access-token': item})
    };
  }

  register(loginModel: LoginModel) {
    return this.http.post(this.apiAddress + '/auth/register', loginModel, httpOptions);
  }

  deleteRoom(_id: string) {

    return this.http.delete(`${this.apiAddress}/room/${_id}`, this.getHttpOptions());
  }

  getAdminRooms() {

    return this.http.get<Room[]>(this.apiAddress + '/room/adminList', this.getHttpOptions());
  }

  getRoom(id: string) {

    return this.http.get<Room>(`${this.apiAddress}/room/${id}`, this.getHttpOptions());
  }

  updateRoom(selectedRoom: Room) {

    return this.http.post(`${this.apiAddress}/room/${selectedRoom._id}`, selectedRoom, this.getHttpOptions());
  }

  addRoom(selectedRoom: Room) {

    return this.http.put(this.apiAddress + '/room', JSON.stringify(selectedRoom), this.getHttpOptions());
  }

  getAdminEvents() {
    return this.http.get<ChatEvent[]>(this.apiAddress + '/eventlog', this.getHttpOptions());
  }

  getMessagesByRoomName(roomName: string) {
    return this.http.post<ChatMessage[]>(this.apiAddress + '/message/roomhistory', {roomName: roomName}, this.getHttpOptions());
  }

  getMessages() {
    return this.http.get<ChatMessage[]>(this.apiAddress + '/message/history', this.getHttpOptions());
  }
}
