import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from '../list/list.component';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';
import {RoomListComponent} from '../admin/room-list/room-list.component';
import {RoomEditComponent} from '../admin/room-edit/room-edit.component';
import {EventsComponent} from '../admin/events/events.component';
import {MessageHistoryComponent} from '../admin/message-history/message-history.component';
import {ChatsComponent} from '../chats/chats.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin-room-log', component: EventsComponent},
  {path: 'rooms', component: RoomListComponent},
  {path: 'roomSelect', component: ListComponent},
  {path: 'admin-edit-room/:id', component: RoomEditComponent},
  {path: 'admin-edit-room', component: RoomEditComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'history', component: MessageHistoryComponent},
  {path: 'history/:name', component: MessageHistoryComponent},
  {path: 'chats', component: ChatsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
