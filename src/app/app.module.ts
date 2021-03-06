import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { PageWelcomeComponent } from './pages/welcome/page-welcome.component';
import { PageTicketListComponent } from './pages/tickets/list/page-ticket-list.component';
import { PageTicketDetailComponent } from './pages/tickets/detail/page-ticket-detail.component';
import { PageProfileComponent } from './pages/profiles/page-profile.component';
import { PageUserListComponent } from './pages/users/list/page-user-list.component';
import { PageUserDetailComponent } from './pages/users/detail/page-user-detail.component';
import { PageReminderListComponent } from './pages/reminders/list/page-reminder-list.component';
import { PageReminderDetailComponent } from './pages/reminders/detail/page-reminder-detail.component';
import { PageOrganizationDetailComponent } from './pages/organizations/detail/page-organization-detail.component';
import { PageOrganizationListComponent } from './pages/organizations/list/page-organization-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    PageWelcomeComponent,
    PageTicketListComponent,
    PageTicketDetailComponent,
    PageProfileComponent,
    PageUserListComponent,
    PageUserDetailComponent,
    PageReminderListComponent,
    PageReminderDetailComponent,
    PageOrganizationDetailComponent,
    PageOrganizationListComponent,
    PageOrganizationListComponent,
    PageOrganizationDetailComponent,
    SpinnerComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    ReactiveFormsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
