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
import { DispatherService } from '../service/dispather.service';
import { ConnectService } from '../service/connect.service';
import { ModalComponent } from './layout/modal/modal.component';
import { ConnectComponent } from './layout/modal/connect/connect.component';

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
    ModalComponent,
    ConnectComponent,
  ],
  exports: [
    ControlComponent,
    WallComponent,
    LayoutComponent,
    ModalComponent,
    ConnectComponent,
  ],
  providers:[
    WebSocketService,
    ManagerService,
    DispatherService,
    ConnectService
  ]
})
export class ControlModule { }
