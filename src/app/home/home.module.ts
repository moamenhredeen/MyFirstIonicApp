import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from "./user/user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    UserComponent,
    UserListComponent
  ]
})
export class HomePageModule {}
