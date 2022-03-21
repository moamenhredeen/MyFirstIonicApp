import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import {ChatRoomComponent} from "./chat-room/chat-room.component";
import {ChatPage} from "./chat.page";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ChatPage,
    ChatRoomComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class ChatModule { }
