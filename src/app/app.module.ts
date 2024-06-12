import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MultiSelectModule} from "primeng/multiselect";
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { HomepageComponent } from './component/user/homepage/homepage.component';
import {CheckboxRequiredValidator, ReactiveFormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";
import {ScrollTopModule} from "primeng/scrolltop";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {TreeSelectModule} from "primeng/treeselect";
import {ButtonModule} from "primeng/button";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {PaginatorModule} from "primeng/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import { TestComponent } from './component/test/test.component';
import { HomedetailComponent } from './component/user/homepage/component/homedetail/homedetail.component';
import {HttpClientModule} from "@angular/common/http";
import { CollabItemComponent } from './component/user/collab-item/collab-item.component';
import {ImageModule} from "primeng/image";
import {DialogModule} from "primeng/dialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import { AddRequestComponent } from './component/user/collab-item/component/add-request/add-request.component';
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import {ConfirmationService, MessageService} from "primeng/api";
import {NotificationService} from "./shared/service/notification.service";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ToastModule} from "primeng/toast";
import { DeviceListComponent } from './component/user/device-list/device-list.component';
import { ClientRequestListComponent } from './component/user/client-request-list/client-request-list.component';
import {TableModule} from "primeng/table";
import { DialogDeviceComponent } from './component/user/device-list/component/dialog-device/dialog-device.component';
import { DeviceHistoryComponent } from './component/user/device-list/component/device-history/device-history.component';
import { RequestHistoryComponent } from './component/user/request-history/request-history.component';
import { CustomerListComponent } from './component/collaborator/customer-list/customer-list.component';
import { RequestDetailComponent } from './component/user/request-history/request-detail/request-detail.component';
import {FieldsetModule} from "primeng/fieldset";
import { CustomerHistoryComponent } from './component/collaborator/customer-list/customer-history/customer-history.component';
import { EmployeeListComponent } from './component/collaborator/employee-list/employee-list.component';
import { AddEmployeeComponent } from './component/collaborator/employee-list/add-employee/add-employee.component';
import {TagModule} from "primeng/tag";
import { EmployeeHistoryComponent } from './component/collaborator/employee-list/employee-history/employee-history.component';
import {DateFormatPipe} from "./shared/pipe/format-date.pipe";
import {TabViewModule} from "primeng/tabview";
import { RequestManagerComponent } from './component/collaborator/request-manager/request-manager.component';
import { OpenStatusComponent } from './component/collaborator/request-manager/open-status/open-status.component';
import { DoingStatusComponent } from './component/collaborator/request-manager/doing-status/doing-status.component';
import { DoneStatusComponent } from './component/collaborator/request-manager/done-status/done-status.component';
import { DenyStatusComponent } from './component/collaborator/request-manager/deny-status/deny-status.component';
import {CalendarModule} from "primeng/calendar";
import { ManagerDetailComponent } from './component/collaborator/request-manager/manager-detail/manager-detail.component';
import { UpdateRequestComponent } from './component/collaborator/request-manager/update-request/update-request.component';
import { UserInformationComponent } from './component/user/user-information/user-information.component';
import { CollaboratorInformationComponent } from './component/collaborator/collaborator-information/collaborator-information.component';
import {FileUploadModule} from "primeng/fileupload";
import {EditorModule} from "primeng/editor";
import { UserLoginComponent } from './login/user-login/user-login.component';
import {HideHeaderNavbarFooterGuard} from "./shared/service/hide-header-navbar-footer-guard";
import { CollaboratorLoginComponent } from './login/collaborator-login/collaborator-login.component';
import {BaseService} from "./shared/service/base.service";
import { StatisticComponent } from './component/collaborator/statistic/statistic.component';
import {CardModule} from "primeng/card";
import {ChartModule} from "primeng/chart";
import { RequestRateComponent } from './component/user/request-history/request-rate/request-rate.component';
import {RatingModule} from "primeng/rating";
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminUserComponent } from './component/admin/admin-user/admin-user.component';
import { AdminCollaboratorComponent } from './component/admin/admin-collaborator/admin-collaborator.component';
import { UserRegisterComponent } from './login/user-register/user-register.component';
import { CollaboratorRegisterComponent } from './login/collaborator-register/collaborator-register.component';
import { CollabHistoryComponent } from './component/user/device-list/collab-history/collab-history.component';
import { AdminRequestComponent } from './component/admin/admin-request/admin-request.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    TestComponent,
    HomedetailComponent,
    CollabItemComponent,
    AddRequestComponent,
    DeviceListComponent,
    ClientRequestListComponent,
    DialogDeviceComponent,
    DeviceHistoryComponent,
    RequestHistoryComponent,
    CustomerListComponent,
    RequestDetailComponent,
    CustomerHistoryComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeHistoryComponent,
    DateFormatPipe,
    RequestManagerComponent,
    OpenStatusComponent,
    DoingStatusComponent,
    DoneStatusComponent,
    DenyStatusComponent,
    ManagerDetailComponent,
    UpdateRequestComponent,
    UserInformationComponent,
    CollaboratorInformationComponent,
    UserLoginComponent,
    CollaboratorLoginComponent,
    StatisticComponent,
    RequestRateComponent,
    AdminHomeComponent,
    AdminUserComponent,
    AdminCollaboratorComponent,
    UserRegisterComponent,
    CollaboratorRegisterComponent,
    CollabHistoryComponent,
    AdminRequestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MultiSelectModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ScrollPanelModule,
    ScrollTopModule,
    TreeSelectModule,
    ButtonModule,
    VirtualScrollerModule,
    PaginatorModule,
    InputTextModule,
    HttpClientModule,
    ImageModule,
    DialogModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ToastModule,
    TableModule,
    FieldsetModule,
    TagModule,
    TabViewModule,
    CalendarModule,
    FileUploadModule,
    EditorModule,
    CardModule,
    ChartModule,
    RatingModule,
  ],
  providers: [
    MessageService,
    NotificationService,
    ConfirmationService,
    HideHeaderNavbarFooterGuard,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
