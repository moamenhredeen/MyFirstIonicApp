import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodolistComponent} from "./todolist/todolist.component";
import {TodoitemComponent} from "./todoitem/todoitem.component";

const routes: Routes = [
  {
    path: 'todolist',
    children: [
      {path: 'todoitem/:id', component: TodoitemComponent},
      {path: '', component: TodolistComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodolistRoutingModule {}
