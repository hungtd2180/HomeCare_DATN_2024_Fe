import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./component/user/homepage/homepage.component";
import {TestComponent} from "./component/test/test.component";
import {CollabItemComponent} from "./component/user/collab-item/collab-item.component";
import {DeviceListComponent} from "./component/user/device-list/device-list.component";
import {RequestHistoryComponent} from "./component/user/request-history/request-history.component";
import {CustomerListComponent} from "./component/collaborator/customer-list/customer-list.component";
import {EmployeeListComponent} from "./component/collaborator/employee-list/employee-list.component";
import {RequestManagerComponent} from "./component/collaborator/request-manager/request-manager.component";
import {UserInformationComponent} from "./component/user/user-information/user-information.component";
import {
  CollaboratorInformationComponent
} from "./component/collaborator/collaborator-information/collaborator-information.component";
import {UserLoginComponent} from "./login/user-login/user-login.component";
import {HideHeaderNavbarFooterGuard} from "./shared/service/hide-header-navbar-footer-guard";
import {CollaboratorLoginComponent} from "./login/collaborator-login/collaborator-login.component";
import {StatisticComponent} from "./component/collaborator/statistic/statistic.component";
import {AdminHomeComponent} from "./component/admin/admin-home/admin-home.component";
import {AdminUserComponent} from "./component/admin/admin-user/admin-user.component";
import {AdminCollaboratorComponent} from "./component/admin/admin-collaborator/admin-collaborator.component";
import {UserRegisterComponent} from "./login/user-register/user-register.component";
import {CollaboratorRegisterComponent} from "./login/collaborator-register/collaborator-register.component";
import {AddRequestComponent} from "./component/user/collab-item/component/add-request/add-request.component";
import {AdminRequestComponent} from "./component/admin/admin-request/admin-request.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'index', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'collaborator/:id', component: CollabItemComponent},
  {path: 'test', component: TestComponent},
  {path: 'device', component: DeviceListComponent},
  {path: 'history', component: RequestHistoryComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'request', component: RequestManagerComponent},
  {path: 'user/information', component: UserInformationComponent},
  {path: 'collab/information', component: CollaboratorInformationComponent},
  {path: 'collab/home', component: StatisticComponent},
  {path: 'admin/home', component: AdminHomeComponent},
  {path: 'admin/user', component: AdminUserComponent},
  {path: 'admin/collaborator', component: AdminCollaboratorComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'collab/login', component: CollaboratorLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'collab/register', component: CollaboratorRegisterComponent},
  {path: 'admin/request', component: AdminRequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
