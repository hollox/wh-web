import { Component, OnInit } from '@angular/core';
import {mergeMap} from "rxjs/operators";
import {Ticket} from "../../tickets/tickets.models";
import {AuthService} from "../../authentication/auth.service";
import {TicketsService} from "../../tickets/tickets.service";

@Component({
  selector: 'page-ticket-list',
  templateUrl: './page-ticket-list.component.html',
  styleUrls: ['./page-ticket-list.component.scss']
})
export class PageTicketListComponent implements OnInit {

  public tickets: Ticket[] = [];

  constructor(public authService: AuthService, public ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.ticketsService.getTickets$(token)
      })).subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
    });
  }

  onRowClick(ticketId: string): void {
    console.log(`onRowClick ${ticketId}`)
  }
}
