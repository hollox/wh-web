import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../../shared/tickets/tickets.models";
import {TicketsService} from "../../../shared/tickets/tickets.service";
import { Router } from '@angular/router';

@Component({
  selector: 'page-ticket-list',
  templateUrl: './page-ticket-list.component.html',
  styleUrls: ['./page-ticket-list.component.scss']
})
export class PageTicketListComponent implements OnInit {

  public tickets: Ticket[] = [];

  constructor(public ticketsService: TicketsService, private router: Router) { }

  ngOnInit(): void {
    this.ticketsService.getTickets$().subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
    });
  }

  onRowClick(ticketId: string): void {
    this.router.navigate(['/ticket', ticketId]);
  }
}
