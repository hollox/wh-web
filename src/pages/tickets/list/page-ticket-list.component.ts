import { Component, OnInit } from '@angular/core';
import {mergeMap} from "rxjs/operators";
import {Ticket} from "../../../shared/tickets/tickets.models";
import {AuthService} from "../../../shared/authentication/auth.service";
import {TicketsService} from "../../../shared/tickets/tickets.service";
import { Router } from '@angular/router';

@Component({
  selector: 'page-ticket-list',
  templateUrl: './page-ticket-list.component.html',
  styleUrls: ['./page-ticket-list.component.scss']
})
export class PageTicketListComponent implements OnInit {

  public tickets: Ticket[] = [];

  constructor(public authService: AuthService, public ticketsService: TicketsService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.ticketsService.getTickets$(token)
      })).subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
    });
  }

  onRowClick(ticketId: string): void {
    this.router.navigate(['/ticket', ticketId]);
  }
}
