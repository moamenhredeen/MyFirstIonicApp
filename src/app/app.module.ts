import {NgModule} from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TodolistModule} from "./todolist/todolist.module";
import {SettingsPageModule} from "./settings/settings.module";
import {GraphicsModule} from "./graphics/graphics.module";
import {ChatModule} from "./chat/chat.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HammerModule,
    IonicModule.forRoot(),
    TodolistModule,
    GraphicsModule,
    ChatModule,
    SettingsPageModule,
    AppRoutingModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
