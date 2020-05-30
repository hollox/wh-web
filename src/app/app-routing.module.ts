import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {PageProfileComponent} from './pages/profiles/page-profile.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {PageWelcomeComponent} from './pages/welcome/page-welcome.component';
import {PageTicketListComponent} from './pages/tickets/list/page-ticket-list.component';
import {PageTicketDetailComponent} from './pages/tickets/detail/page-ticket-detail.component';
import {PageUserListComponent} from './pages/users/list/page-user-list.component';
import {PageUserDetailComponent} from './pages/users/detail/page-user-detail.component';
import {PageReminderDetailComponent} from './pages/reminders/detail/page-reminder-detail.component';
import {PageReminderListComponent} from './pages/reminders/list/page-reminder-list.component';
import {PageOrganizationListComponent} from './pages/organizations/list/page-organization-list.component';
import {PageOrganizationDetailComponent} from './pages/organizations/detail/page-organization-detail.component';

const routes: Route[] = [
  {
    path: '',
    component: PageWelcomeComponent,
  },
  {
    path: 'profile',
    component: PageProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reminders',
    component: PageReminderListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reminder',
    component: PageReminderDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reminder/:reminderId',
    component: PageReminderDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tickets',
    component: PageTicketListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ticket',
    component: PageTicketDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ticket/:ticketId',
    component: PageTicketDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: PageUserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: PageUserDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:userId',
    component: PageUserDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'organizations',
    component: PageOrganizationListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'organization',
    component: PageOrganizationDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'organization/:organizationId',
    component: PageOrganizationDetailComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
