import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message, MessageJson} from "./messages.models";

export function convertJsonToModels(messages: MessageJson[]): Message[] {
  return messages.map(convertJsonToModel);
}

export function convertJsonToModel(message: MessageJson): Message {
  return {
    messageId: message.message_id,
    ticketId: message.ticket_id,
    authorUserId: message.author_user_id,
    content: message.content,
    createDate: new Date(message.create_date)
  }
}

export function convertModelsToJson(messages: Message[]): MessageJson[] {
  return messages.map(convertModelToJson);
}

export function convertModelToJson(message: Message): MessageJson {
  return {
    message_id: message.messageId,
    ticket_id: message.ticketId,
    author_user_id: message.authorUserId,
    content: message.content,
    create_date: message.createDate.toISOString()
  }
}

export function newFormGroup(): FormGroup {
  return new FormGroup({
    messageId: new FormControl(null),
    ticketId: new FormControl(null, [Validators.required]),
    authorUserId: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required])
  });
}
