import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {TicketsService} from "../../../shared/tickets/tickets.service";
import {UsersService} from "../../../shared/users/users.service";
import {Ticket} from "../../../shared/tickets/tickets.models";
import * as ticketsHelper from "../../../shared/tickets/tickets.helper";
import {map, mergeMap} from "rxjs/operators";
import {Subscription} from "rxjs";
import * as messagesHelper from "../../../shared/messages/messages.helper";
import {Message} from "../../../shared/messages/messages.models";
import {MessagesService} from "../../../shared/messages/messages.service";

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

  constructor(public route: ActivatedRoute, public ticketsService: TicketsService, public usersService: UsersService, public messagesService: MessagesService) { }

  ngOnInit(): void {
    this.dataLoaded = false;

    this.ticketFormGroup = ticketsHelper.newFormGroup();
    this.messageFormGroup = messagesHelper.newFormGroup();

    this.getTicketByIdSub = this.route.params.pipe(
      mergeMap((params: Params) => {
          if (params["ticketId"]) {
            console.log("100");
            return this.ticketsService.getById$(params["ticketId"]);
          } else {
            return this.usersService.whoAmI().pipe(
              map(user => {
                console.log("200", user);
                return ticketsHelper.newTicket({authorUserId: user.userId});
              })
            )
          }
        }
      )).subscribe((ticket: Ticket) => {
        console.log({ticket});
      this.ticketFormGroup.setValue(ticket);
      this.dataLoaded = true;
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
    this.ticketsService.save$(ticket).subscribe((ticket: Ticket) => {
      this.ticketFormGroup.setValue(ticket);
    })
  }

  onMessageSubmit(): void {
    if (this.messageFormGroup.invalid) {
      return;
    }

    const message = this.messageFormGroup.getRawValue();
    this.messagesService.save$(message).subscribe((message: Message) => {
      const messages = this.ticketFormGroup.get("messages").value;
      const newMessages = this.replaceMessage(message, messages);
      this.ticketFormGroup.patchValue({ messages: newMessages })
      this.messageFormGroup.setValue(message);
    })
  }

  replaceMessage(message: Message, messages: Message[]): Message[] {
    const filteredMessages = messages.filter(m => m.messageId !== message.messageId);
    return [...filteredMessages, message];
  }
}
