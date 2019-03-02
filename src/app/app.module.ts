import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {ReserveComponent} from './reserve/reserve.component';
import {AdminLoginComponent} from './admin/admin-login/admin-login.component';
import {AdminListComponent} from './admin/admin-list/admin-list.component';
import {AdminNewVideoComponent} from './admin/admin-new-video/admin-new-video.component';
import {AdminCustomerListComponent} from './admin/admin-customer-list/admin-customer-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ReserveComponent,
    AdminLoginComponent,
    AdminListComponent,
    AdminNewVideoComponent,
    AdminCustomerListComponent,
    LoginComponent,
    RegisterComponent,
    ChatsComponent
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
