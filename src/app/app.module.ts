import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MultiSelectModule} from "primeng/multiselect";
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { HomepageComponent } from './component/user/homepage/homepage.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";
import {ScrollTopModule} from "primeng/scrolltop";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {TreeSelectModule} from "primeng/treeselect";
import {ButtonModule} from "primeng/button";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {PaginatorModule} from "primeng/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent
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
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
