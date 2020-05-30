import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {TicketsService} from '../../../../shared/tickets/tickets.service';
import {UsersService} from '../../../../shared/users/users.service';
import {Ticket} from '../../../../shared/tickets/tickets.models';
import * as ticketsHelper from '../../../../shared/tickets/tickets.helper';
import {map, mergeMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import * as messagesHelper from '../../../../shared/messages/messages.helper';
import {Message} from '../../../../shared/messages/messages.models';
import {MessagesService} from '../../../../shared/messages/messages.service';

@Component({
  selector: 'page-ticket-detail',
  templateUrl: './page-ticket-detail.component.html',
  styleUrls: ['./page-ticket-detail.component.scss']
})
export class PageTicketDetailComponent implements OnInit, OnDestroy {

  ticketFormGroup: FormGroup;
  messageFormGroup: FormGroup;
  getTicketByIdSub = Subscription.EMPTY;

  dataLoaded: boolean;

  readonly TICKET_STATUS_OPEN = "f0894747-a11a-4915-9b2c-42ff98692cb3";
  readonly TICKET_STATUS_IN_PROGRESS = "91342483-5f10-4558-9be2-4b024718eb30";
  readonly TICKET_STATUS_COMPLETED = "daa7ab46-d3f4-4b42-8b47-30abe971f378";

  constructor(public route: ActivatedRoute,
              public ticketsService: TicketsService,
              public usersService: UsersService,
              public messagesService: MessagesService)
  { }

  ngOnInit(): void {
    this.dataLoaded = false;

    this.ticketFormGroup = ticketsHelper.newFormGroup();
    this.messageFormGroup = messagesHelper.newFormGroup();
    this.messageFormGroup.disable();

    this.getTicketByIdSub = this.route.params.pipe(
      mergeMap((params: Params) => {
          if (params.ticketId) {
            return this.ticketsService.getById$(params.ticketId);
          } else {
            return this.usersService.whoAmI().pipe(
              map(user => {
                return ticketsHelper.newTicket({authorUserId: user.userId});
              })
            );
          }
        }
      )).subscribe((ticket: Ticket) => {
      this.ticketFormGroup.setValue(ticket);
      this.dataLoaded = true;
      if (ticket.ticketId) {
        this.messageFormGroup.patchValue({ ticketId: ticket.ticketId });
        this.messageFormGroup.enable();
      }
    });
    this.usersService.whoAmI().subscribe(user => {
      this.messageFormGroup.patchValue({authorUserId: user.userId});
    });
  }

  ngOnDestroy() {
    this.getTicketByIdSub.unsubscribe();
  }

  onTicketSubmit(): void {
    if (this.ticketFormGroup.invalid) {
      return;
    }

    const ticket = this.ticketFormGroup.getRawValue();
    this.ticketsService.save$(ticket).subscribe((t: Ticket) => {
      this.ticketFormGroup.setValue(t);
      this.messageFormGroup.patchValue({ ticketId: t.ticketId });
      this.messageFormGroup.enable();
    });
  }

  onMessageSubmit(): void {
    if (this.messageFormGroup.invalid) {
      return;
    }

    const message = this.messageFormGroup.getRawValue();
    this.messagesService.save$(message).subscribe((m: Message) => {
      const messages = this.ticketFormGroup.get('messages').value;
      const newMessages = this.replaceMessage(m, messages);
      this.ticketFormGroup.patchValue({ messages: newMessages });
      const blankMessage = messagesHelper.newMessage({ ticketId: m.ticketId, authorUserId: m.authorUserId });
      this.messageFormGroup.reset(blankMessage);
    });
  }

  replaceMessage(message: Message, messages: Message[]): Message[] {
    const filteredMessages = messages.filter(m => m.messageId !== message.messageId);
    return [...filteredMessages, message];
  }

  setStatus(ticketId: string, statusId: string): void {
    this.ticketsService.setStatus$(ticketId, statusId).subscribe(isSuccess => {
      if (isSuccess) {
        this.ticketFormGroup.patchValue({statusId});
      }
    });
  }
}
