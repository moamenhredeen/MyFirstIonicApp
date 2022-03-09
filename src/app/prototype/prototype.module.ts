import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrototypeRoutingModule } from './prototype-routing.module';
import {PrototypePage} from "./prototype.page";
import {GraphicsComponent} from "./graphics/graphics.component";
import {DevicesComponent} from "./devices/devices.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PrototypePage,
    GraphicsComponent,
    DevicesComponent
  ],
  imports: [
    SharedModule,
    PrototypeRoutingModule
  ]
})
export class PrototypeModule { }
