import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {PageProfileComponent} from "../pages/profile/page-profile.component";
import {AuthGuard} from "./auth/auth.guard";
import {PageWelcomeComponent} from "../pages/welcome/page-welcome.component";
import {PageTicketListComponent} from "../pages/tickets/list/page-ticket-list.component";
import {PageTicketDetailComponent} from "../pages/tickets/detail/page-ticket-detail.component";
import {PageUserListComponent} from "../pages/users/list/page-user-list.component";
import {PageUserDetailComponent} from "../pages/users/detail/page-user-detail.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
