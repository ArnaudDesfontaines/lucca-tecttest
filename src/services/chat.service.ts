import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Message } from 'src/interfaces/message.interface';
import { MockMessages } from 'src/services/mock-messages'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatMessagesBS: BehaviorSubject<Message[]> = new BehaviorSubject(MockMessages);

  constructor() { }

  postChatMessage(newMessage: Message) {
    this.chatMessagesBS.value.push(newMessage)
  }

  getChatMessages(): Message[] {
    return this.chatMessagesBS.value;
  }
}
