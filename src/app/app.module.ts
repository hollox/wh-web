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
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { PageTicketListComponent } from './page-ticket-list/page-ticket-list.component';
import { PageTicketDetailComponent } from './page-ticket-detail/page-ticket-detail.component';
import { PageProfileComponent } from './page-profile/page-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AppHeaderComponent,
    PageWelcomeComponent,
    PageTicketListComponent,
    PageTicketDetailComponent,
    PageProfileComponent
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
