import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrototypePage} from "./prototype.page";
import {DevicesComponent} from "./devices/devices.component";
import {GraphicsComponent} from "./graphics/graphics.component";

const routes: Routes = [
  {
    path: 'prototype',
    component: PrototypePage,
    children: [
      {path: '', redirectTo: 'devices', pathMatch: 'full'},
      {path: 'devices', component: DevicesComponent},
      {path: 'graphics', component: GraphicsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrototypeRoutingModule { }
