import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import {PaperjsComponent} from "./paperjs/paperjs.component";
import {GraphicsPage} from "./graphics.page";
import {SharedModule} from "../shared/shared.module";
import {FabricjsComponent} from "./fabricjs/fabricjs.component";
import {FormsModule} from "@angular/forms";
import {KonvaComponent} from "./konva/konva.component";


@NgModule({
  declarations: [
    GraphicsPage,
    PaperjsComponent,
    FabricjsComponent,
    KonvaComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    SharedModule,
  ]
})
export class GraphicsModule { }
