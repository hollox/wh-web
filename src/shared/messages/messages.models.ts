export interface Message {
  messageId: string;
  ticketId: string;
  authorUserId: string;
  content: string;
  createDate: Date;
}

export interface MessageJson {
  message_id: string;
  ticket_id: string;
  author_user_id: string;
  content: string;
  create_date: string;
}
