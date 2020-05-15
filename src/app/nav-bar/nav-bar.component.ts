import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import {TicketsService} from "../../tickets/tickets.service";
import {Ticket, TicketJson} from "../../tickets/tickets.models";
import {map, mergeMap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {convertTicketsJsonToModel} from "../../tickets/tickets.helper";

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  tickets = [] as Ticket[];

  constructor(public authService: AuthService, public ticketsService: TicketsService) {
  }

  ngOnInit() {
    this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        console.log({token});
        return this.ticketsService.getTickets$(token)
      })).subscribe((tickets: Ticket[]) => {
      console.log(tickets);
      this.tickets = tickets;
    });
  }
}
