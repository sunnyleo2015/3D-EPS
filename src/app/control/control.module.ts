import { NgModule } from '@angular/core';
import { controlRouteModule } from './control.route';
import { BrowserModule } from '@angular/platform-browser';

import { ControlComponent } from './control.component';
import { WallComponent } from './wall/wall.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { RebirthNGModule } from 'rebirth-ng';

import { WebSocketService } from '../service/webSocket.service';
import { ManagerService } from '../service/manager.service';

@NgModule({
  imports: [
    controlRouteModule,
    FormsModule,
    RebirthNGModule,
    BrowserModule
  ],
  declarations: [
    ControlComponent,
    WallComponent,
    LayoutComponent,
  ],
  exports: [
    ControlComponent,
    WallComponent,
    LayoutComponent,
  ],
  providers:[
    WebSocketService,
    ManagerService
  ]
})
export class ControlModule { }
