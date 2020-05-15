import { Ticket, TicketJson } from "./tickets.models";
import {debugOutputAstAsTypeScript} from "@angular/compiler";


export function convertTicketsJsonToModel(tickets: TicketJson[]): Ticket[] {
  return tickets.map(convertTicketJsonToModel);
}

function convertTicketJsonToModel(ticket: TicketJson): Ticket {
  return {
    ticketId: ticket.ticket_id,
    description: ticket.description
  }
}
