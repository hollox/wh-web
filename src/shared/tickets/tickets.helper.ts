import { Ticket, TicketJson } from './tickets.models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as messagesHelper from '../messages/messages.helper';

export function convertJsonToModels(tickets: TicketJson[]): Ticket[] {
  return tickets.map(convertJsonToModel);
}

export function convertJsonToModel(ticket: TicketJson): Ticket {
  return {
    ticketId: ticket.ticket_id,
    authorUserId: ticket.author_user_id,
    title: ticket.title,
    content: ticket.content,
    messages: messagesHelper.convertJsonToModels(ticket.messages)
  };
}

export function convertModelToJson(ticket: Ticket): TicketJson {
  return {
    ticket_id: ticket.ticketId,
    author_user_id: ticket.authorUserId,
    title: ticket.title,
    content: ticket.content,
    messages: messagesHelper.convertModelsToJson(ticket.messages)
  };
}

export function newFormGroup(): FormGroup {
  return new FormGroup({
    ticketId: new FormControl(null),
    authorUserId: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    messages: new FormControl(null)
  });
}

export function newTicket(ticket?: Partial<Ticket>): Ticket {
  return {
    ticketId: '',
    authorUserId: '',
    title: '',
    content: '',
    messages: [],
    ...ticket
  };
}
