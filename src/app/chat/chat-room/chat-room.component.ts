import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";
import {Message} from "../message";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent{

  title = 'socketrv';
  content = '';
  received = [];
  sent = [];

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      this.received.push(msg);
      console.log("Response from websocket: " + msg);
    });
  }

  sendMsg() {
    let message:Message = {
      body: ''
    };
    message.body = this.content;

    this.sent.push(message);
    this.chatService.messages.next(message);
  }

}
