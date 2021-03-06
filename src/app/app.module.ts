import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatsComponent } from './chats/chats.component';
import { RoomListComponent } from './admin/room-list/room-list.component';
import { RoomEditComponent } from './admin/room-edit/room-edit.component';
import { EventsComponent } from './admin/events/events.component';
import { MessageHistoryComponent } from './admin/message-history/message-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,

    LoginComponent,
    RegisterComponent,
    ChatsComponent,
    RoomListComponent,
    RoomEditComponent,
    EventsComponent,
    MessageHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
