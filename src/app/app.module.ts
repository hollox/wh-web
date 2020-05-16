import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../material/material.module";
import { AppHeaderComponent } from './app-header/app-header.component';
import { PageWelcomeComponent } from '../pages/page-welcome/page-welcome.component';
import { PageTicketListComponent } from '../pages/page-ticket-list/page-ticket-list.component';
import { PageTicketDetailComponent } from '../pages/page-ticket-detail/page-ticket-detail.component';
import { PageProfileComponent } from '../pages/page-profile/page-profile.component';
import { PageUserListComponent } from '../pages/page-user-list/page-user-list.component';
import { PageUserDetailComponent } from '../pages/page-user-detail/page-user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AppHeaderComponent,
    PageWelcomeComponent,
    PageTicketListComponent,
    PageTicketDetailComponent,
    PageProfileComponent,
    PageUserListComponent,
    PageUserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
