import { Component, OnInit } from '@angular/core';
import {User} from "../types/user";
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  users:User[];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  ionViewDidEnter(){
    this.httpClient.get<{message:string, data:User[]}>("http://localhost:3000/user")
      .subscribe(res => this.users = res.data);
  }
}
