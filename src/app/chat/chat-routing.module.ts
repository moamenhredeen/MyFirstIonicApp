import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatPage} from "./chat.page";
import {ChatRoomComponent} from "./chat-room/chat-room.component";

const routes: Routes = [
  {
    path:'chat',
    component: ChatPage,
    children: [
      {path: 'chat-room', component: ChatRoomComponent},
      {path: '', redirectTo: 'chat-room', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
