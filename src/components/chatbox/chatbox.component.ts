import { Component, Input, OnDestroy } from '@angular/core';

import { Message } from 'src/interfaces/message.interface';
import { ChatService } from 'src/services/chat.service'

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnDestroy {
  @Input() owner: string;
  @Input() color: 'purple' | 'green';
  value: string;
  chatMessages: Message[] = [];
  messageToSend: Message;

  constructor(private chatService: ChatService) {
    this.chatService.chatMessagesBS.subscribe((messages) => this.chatMessages = messages);
  }

  sendMessage(inputContent: string) {
    let messageToSend: Message = {
      author: this.owner,
      text: '',
    }
    messageToSend.text = inputContent;
    this.chatService.postChatMessage(messageToSend);
    this.value = '';
  }

  ngOnDestroy() {
    this.chatService.chatMessagesBS.unsubscribe();
  }
}
