import {NgModule} from '@angular/core';

import {TodolistComponent} from "./todolist/todolist.component";
import {SharedModule} from "../shared/shared.module";
import {TodoitemComponent} from "./todoitem/todoitem.component";
import {TodolistRoutingModule} from "./todolist-routing.module";


@NgModule({
  imports: [
    SharedModule,
    TodolistRoutingModule,
  ],
  declarations: [
    TodolistComponent,
    TodoitemComponent,
  ]
})
export class TodolistModule {}
