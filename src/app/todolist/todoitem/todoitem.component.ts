import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoItem} from "../TodoItem";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
})
export class TodoitemComponent implements OnInit, OnDestroy {

  todoItem:TodoItem;
  routesSub: Subscription;
  httpSub: Subscription;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routesSub = this.route.paramMap.subscribe(
      params => {
        const id = params.get('id')
        console.log(id)
        this.httpSub = this.httpClient.get<TodoItem>("http://localhost:8080/todo/" + id)
          .subscribe(res => {
            console.log(res)
            this.todoItem = res
          });
      }
    )
  }

  ionViewDidEnter(){
  }

  ngOnDestroy(): void {
    this.httpSub.unsubscribe();
    this.routesSub.unsubscribe();
  }

}
