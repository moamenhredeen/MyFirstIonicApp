import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoItem} from "../TodoItem";
import {Subscription} from "rxjs";
import {logging} from "protractor";
import {log} from "util";

@Component({
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit, OnDestroy{

  todoItems:TodoItem[];
  sub: Subscription;
  isModalOpen: boolean;
  header: string;
  body: string;
  status: number;
  priority: number;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.sub = this.httpClient.get<TodoItem[]>("http://192.168.43.216:8080/todo")
      .subscribe(res => this.todoItems = res);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addTodoItem(event: MouseEvent) {
    const todoItem = {
      header: this.header,
      body: this.body,
      status: this.status,
      priority: this.priority
    };
    this.httpClient.post<TodoItem>("http://192.168.43.216:8080/todo", todoItem)
      .subscribe();
    this.isModalOpen = false;
  }
}
