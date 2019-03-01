import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from '../list/list.component';
import {AdminLoginComponent} from '../admin/admin-login/admin-login.component';
import {AdminCustomerListComponent} from '../admin/admin-customer-list/admin-customer-list.component';
import {ReserveComponent} from '../reserve/reserve.component';
import {AdminListComponent} from '../admin/admin-list/admin-list.component';
import {AdminNewVideoComponent} from '../admin/admin-new-video/admin-new-video.component';
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  {path: 'list', component: ListComponent},
  // {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'customers', component: AdminCustomerListComponent},
  {path: 'reserve/:id', component: ReserveComponent},
  {path: 'adminlist', component: AdminListComponent},
  {path: 'admin-edit-video/:id', component: AdminNewVideoComponent},
  {path: 'admin-edit-video', component: AdminNewVideoComponent},
  {path:'register',component:RegisterComponent}
  // ,{path:'adminDashboard',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
