import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {PageProfileComponent} from "./page-profile/page-profile.component";
import {AuthGuard} from "./auth/auth.guard";
import {PageWelcomeComponent} from "./page-welcome/page-welcome.component";
import {PageTicketListComponent} from "./page-ticket-list/page-ticket-list.component";
import {PageTicketDetailComponent} from "./page-ticket-detail/page-ticket-detail.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
