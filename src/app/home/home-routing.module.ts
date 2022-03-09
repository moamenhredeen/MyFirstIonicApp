import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {UserComponent} from "./user/user.component";
import {UserListComponent} from "./user-list/user-list.component";

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {
    path: 'home',
    component: HomePage,
    children: [
      {path:'', redirectTo:'user', pathMatch: 'full'},
      {path: 'user', component: UserListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
