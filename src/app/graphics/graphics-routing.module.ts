import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaperjsComponent} from "./paperjs/paperjs.component";
import {GraphicsPage} from "./graphics.page";
import {FabricjsComponent} from "./fabricjs/fabricjs.component";
import {KonvaComponent} from "./konva/konva.component";

const routes: Routes = [
  {
    path: 'graphics',
    component: GraphicsPage,
    children: [
      {path: 'paperjs', component: PaperjsComponent},
      {path: 'fabricjs', component: FabricjsComponent},
      {path: 'konva', component: KonvaComponent},
      {path: '', redirectTo: 'paperjs', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
