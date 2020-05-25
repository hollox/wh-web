import {Message, MessageJson} from '../messages/messages.models';

export interface Ticket {
  ticketId: string;
  authorUserId: string;
  title: string;
  content: string;
  messages: Message[];
}

export interface TicketJson {
  ticket_id: string;
  author_user_id: string;
  title: string;
  content: string;
  messages: MessageJson[];
}

